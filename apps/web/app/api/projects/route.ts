import { NextRequest, NextResponse } from "next/server";

import { auth } from "@clerk/nextjs/server";

import { getCurrentUser } from "@/lib/auth";

import { projectService } from "@/lib/services/project.service";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = await getCurrentUser();

    const projects = await projectService.findAll(user.id);

    return NextResponse.json(projects);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to fetch projects." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = await getCurrentUser();

    const body = await req.json();

    const project = await projectService.create({
      title: body.title,
      description: body.description,
      prompt: body.prompt,
      genre: body.genre,
      style: body.style,
      language: body.language,
      duration:
        typeof body.duration === "string"
          ? parseInt(body.duration) || 1
          : body.duration,
      userId: user.id,
    });

    return NextResponse.json(project, {
      status: 201,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to create project." },
      { status: 500 }
    );
  }
}