import { headers } from "next/headers";
import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Missing CLERK_WEBHOOK_SECRET");
  }

  const headerPayload = await headers();

  const svixId = headerPayload.get("svix-id");
  const svixTimestamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response("Missing Svix headers", {
      status: 400,
    });
  }

  const payload = await req.text();

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(payload, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Webhook verification failed.", err);
    return new Response("Invalid signature", {
      status: 400,
    });
  }

  switch (evt.type) {
    case "user.created": {
      const { id, email_addresses, image_url, first_name, last_name } =
        evt.data;

      await prisma.user.create({
        data: {
          clerkId: id,
          email: email_addresses[0]?.email_address ?? "",
          name: `${first_name ?? ""} ${last_name ?? ""}`.trim(),
          imageUrl: image_url,
        },
      });

      break;
    }

    case "user.updated": {
      const { id, email_addresses, image_url, first_name, last_name } =
        evt.data;

      await prisma.user.update({
        where: {
          clerkId: id,
        },
        data: {
          email: email_addresses[0]?.email_address ?? "",
          name: `${first_name ?? ""} ${last_name ?? ""}`.trim(),
          imageUrl: image_url,
        },
      });

      break;
    }

    case "user.deleted": {
      if (evt.data.id) {
        await prisma.user.delete({
          where: {
            clerkId: evt.data.id,
          },
        });
      }

      break;
    }
  }

  return new Response("Webhook received", {
    status: 200,
  });
}