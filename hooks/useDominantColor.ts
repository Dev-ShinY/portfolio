import { useState, useEffect } from "react";

/**
 * FormData을 api dominant-color 라우터로 최빈값을 구함.
 * @param {FormData} formData - 이미지 파일 FormData
 * @returns {Promise<string>} - 최빈색 RGB 값
 * @throws {Error} - 최빈색을 가져오는 데 실패한 경우
 */

const fetchDominantColor = async (
  formData: FormData,
  icon: string
): Promise<string> => {
  const response = await fetch("/api/dominant-color", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    const data = await response.json();

    // 쿠키 저장
    // 쿠키에 아이콘별 최빈색 저장 (1일 유효)
    const storedColors = getStoredColors();
    storedColors[icon] = data.color;
    setStoredColors(storedColors);

    return data.color;
  }

  throw new Error("Failed to fetch dominant color");
};

/**
 * 쿠키에서 mostFrequentColors JSON을 가져오는 함수
 * @returns {Record<string, string>} - 아이콘별 색상 객체
 */
const getStoredColors = (): Record<string, string> => {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("mostFrequentColors="));

  if (!cookie) return {};

  try {
    return JSON.parse(decodeURIComponent(cookie.split("=")[1]));
  } catch {
    return {};
  }
};

/**
 * mostFrequentColors JSON을 쿠키에 저장하는 함수
 * @param {Record<string, string>} colors - 아이콘별 색상 객체
 */
const setStoredColors = (colors: Record<string, string>) => {
  document.cookie = `mostFrequentColors=${encodeURIComponent(
    JSON.stringify(colors)
  )}; path=/; max-age=86400`;
};

/**
 * 아이콘의 최빈색 커스텀 훅
 * @param {string} icon - 아이콘 이름
 * @returns {string} - 최빈색 RGB 값
 */
export function useDominantColor(icon: string) {
  const theme = "dark";
  const imgSrc = `/api/icon-image/${icon}?theme=${theme}`;

  const [dominantColor, setDominantColor] = useState<string>("#333");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedColors = getStoredColors();
        if (storedColors[icon]) {
          setDominantColor(storedColors[icon]);
          return;
        }

        const imgRes = await fetch(imgSrc);
        const blob = await imgRes.blob();
        const formData = new FormData();
        formData.append("file", blob);

        const color = await fetchDominantColor(formData, icon);
        setDominantColor(color);
      } catch (error) {
        console.error("API 요청 중 오류가 발생했습니다.", error);
      }
    };
    fetchData();
  }, [icon]);

  return dominantColor;
}
