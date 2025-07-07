import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

/**
 * 로컬의 assets/skill-icon 디렉토리 내의 아이콘 이미지 반환
 * 로컬에 해당 아이콘 이미지가 없는 경우, skillicons.dev에서 동일한 아이콘을 리턴
 * @param {string} icon
 * @param {string} [theme="dark"]
 */

export async function GET(req: NextRequest) {
  const icon = req.nextUrl.searchParams.get("icon");
  const theme = req.nextUrl.searchParams.get("theme") || "dark";

  if (!icon) {
    return NextResponse.json({ error: "Missing icon" }, { status: 400 });
  }

  const filePath = path.join(
    process.cwd(),
    "assets",
    "skill-icon",
    `${icon}.webp`
  );
  try {
    const buffer = await fs.readFile(filePath);
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "image/webp",
      },
    });
  } catch {
    const imageUrl = `https://skillicons.dev/icons?i=${icon}&theme=${theme}`;
    try {
      const res = await fetch(imageUrl);
      const blob = await res.arrayBuffer();

      return new NextResponse(blob, {
        headers: {
          "Content-Type": "image/webp",
          "Cache-Control": "public, max-age=86400",
        },
      });
    } catch (err) {
      return NextResponse.json(
        { error: "[Fallback image fetch failed] " + err },
        { status: 500 }
      );
    }
  }
}
