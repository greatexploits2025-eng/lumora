import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { getCurrentUser } from "@/lib/auth";
import { projectService } from "@/lib/services/project.service";
import { sceneService } from "@/lib/services/scene.service";

type Props = {
  params: Promise<{
    id: string;
  }>;
}; 

export async function GET(
  req: NextRequest,
  { params }: Props
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = await getCurrentUser();

    const { id } = await params;

    const project = await projectService.findById(
      id,
      user.id
    );

    if (!project) {
      return NextResponse.json(
        { error: "Project not found." },
        { status: 404 }
      );
    }

    const scenes = await sceneService.findAll(id);

    return NextResponse.json(scenes);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to fetch scenes." },
      { status: 500 }
    );
  }
}

export async function POST(
  req: NextRequest,
  { params }: Props
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = await getCurrentUser();

    const { id } = await params;

    const project = await projectService.findById(
      id,
      user.id
    );

    if (!project) {
      return NextResponse.json(
        { error: "Project not found." },
        { status: 404 }
      );
    }

    const body = await req.json();

    const scene = await sceneService.create({
      title: body.title,
      description: body.description,
      prompt: body.prompt,
      projectId: id,
      userId: user.id,
    });

    return NextResponse.json(scene, {
      status: 201,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to create scene." },
      { status: 500 }
    );
  }
}