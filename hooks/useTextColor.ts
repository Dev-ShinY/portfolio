import { useMemo } from "react";

/**
 * 주어진 색상에 따라 적절한 텍스트 색상을 결정하는 커스텀 훅
 * 밝기에 따라 어두운 배경에는 밝은 텍스트 색상, 밝은 배경에는 어두운 텍스트 색상을 반환
 * @param {string} color - RGB 또는 HEX 형식의 색상 문자열
 * @returns {string} - 텍스트 색상(흰색 or 검은색)
 */

const useTextColor = (color: string): string => {
  const textColor = useMemo(() => {
    let r: number, g: number, b: number;

    if (color.startsWith("rgba")) {
      // RGB
      const match = color.match(
        /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([0-9.]+)\)$/
      );

      if (!match) {
        return "#000000"; // 기본값
      }
      [r, g, b] = match.slice(1, 4).map(Number);
    } else if (color.startsWith("#")) {
      // HEX
      let hex = color.replace("#", "");

      if (hex.length === 3) {
        hex = hex
          .split("")
          .map((char) => char + char)
          .join("");
      }
      if (hex.length !== 6) {
        return "#000000";
      }

      // HEX to RGB
      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
    } else {
      console.warn("Invalid color format:", color);
      return "#000000";
    }

    // Luminance (밝기)
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

    return luminance >= 128 ? "#000000" : "#FFFFFF";
  }, [color]);

  return textColor;
};

export default useTextColor;
