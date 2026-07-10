import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { projectService } from "@/lib/services/project.service";

// GET /api/projects
export async function GET() {
  try {
    const user = await getCurrentUser();

    const projects = await projectService.findAll(user.id);

    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      {
        status: 401,
      }
    );
  }
}

// POST /api/projects
export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();

    const body = await req.json();

    const project = await projectService.create({
      title: body.title,
      description: body.description,
      prompt: body.prompt,
      genre: body.genre,
      style: body.style,
      language: body.language ?? "English",
      duration: body.duration,
      userId: user.id,
    });

    return NextResponse.json(project, {
      status: 201,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      {
        status: 401,
      }
    );
  }
}