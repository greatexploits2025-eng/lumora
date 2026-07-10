import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { projectService } from "@/lib/services/project.service";

// GET /api/projects/:id
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await getCurrentUser();

    const { id } = await params;

    const project = await projectService.findById(id);

    if (!project) {
      return NextResponse.json(
        {
          error: "Project not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown error",
      },
      {
        status: 401,
      }
    );
  }
}

// PATCH /api/projects/:id
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await getCurrentUser();

    const { id } = await params;

    const body = await req.json();

    const project = await projectService.update(id, body);

    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown error",
      },
      {
        status: 400,
      }
    );
  }
}

// DELETE /api/projects/:id
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await getCurrentUser();

    const { id } = await params;

    await projectService.delete(id);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown error",
      },
      {
        status: 400,
      }
    );
  }
}