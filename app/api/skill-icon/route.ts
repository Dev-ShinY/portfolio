import { NextRequest, NextResponse } from "next/server";
import { promisify } from "util";
import path from "path";
import fs from "fs";

const readFileAsync = promisify(fs.readFile);

/**
 * icon명으로 skillicons에 icon 이미지 파일을 반환하는 핸들러
 *
 * @param {NextRequest} req - icon / theme (icon 명 / 테마: dark or light)
 * @returns {Promise<NextResponse>} - icon 이미지 파일
 */

export async function GET(req: NextRequest) {
  const icon = req.nextUrl.searchParams.get("icon");
  const theme = req.nextUrl.searchParams.get("theme");

  if (!icon || typeof icon !== "string") {
    return NextResponse.json(
      { error: "Icon name is required" },
      { status: 400 }
    );
  }

  const iconPath = path.join(
    process.cwd(),
    "assets/skill-icon",
    `${icon}.webp`
  );

  if (fs.existsSync(iconPath)) {
    const fileBuffer = await readFileAsync(iconPath);
    const headers = new Headers();
    headers.set("Content-Type", "image/webp");
    return new NextResponse(fileBuffer, { headers });
  } else {
    return NextResponse.redirect(
      `https://skillicons.dev/icons?i=${icon}&theme=${theme}`,
      307
    );
  }
}
