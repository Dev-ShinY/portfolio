import { NextRequest, NextResponse } from "next/server";
import { projectDetails } from "@/data/section-data";
import { ProjectDetails } from "@/types/type";

export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get("projectKey");
  if (key && (projectDetails as ProjectDetails)[key]) {
    return NextResponse.json((projectDetails as ProjectDetails)[key]);
  } else {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }
}
