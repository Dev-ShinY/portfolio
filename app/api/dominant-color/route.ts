import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

/**
 * 이미지 파일를 sharp를 활용하여 최빈색을 추출
 * @param {NextRequest} req - 이미지 파일
 * @returns {Promise<NextResponse>} 최빈색 rgb값의 JSON
 */

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as Blob | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // image load
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const { data: imageData, info } = await sharp(buffer)
      .raw()
      .toBuffer({ resolveWithObject: true });

    const colorCount: Record<string, number> = {};

    // 32픽셀 간격 샘플링 (성능 이슈)
    for (let i = 0; i < imageData.length; i += info.channels * 32) {
      const r = imageData[i];
      const g = imageData[i + 1];
      const b = imageData[i + 2];

      // 흰색/검은색 제외
      if (
        (r === 255 && g === 255 && b === 255) ||
        (r === 0 && g === 0 && b === 0) ||
        (r === 36 && g === 41 && b === 56) // skillicons dark theme color
      ) {
        continue;
      }
      const colorKey = `${r},${g},${b}, 0.7`;
      colorCount[colorKey] = (colorCount[colorKey] || 0) + 1;
    }

    // 최빈색 찾기
    let mostFrequentColor = "255,255,255";
    let maxCount = 0;

    Object.entries(colorCount).forEach(([color, count]) => {
      if (count > maxCount) {
        mostFrequentColor = color;
        maxCount = count;
      }
    });

    return NextResponse.json({ color: `rgba(${mostFrequentColor})` });
  } catch (error) {
    console.error("Error processing image:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
