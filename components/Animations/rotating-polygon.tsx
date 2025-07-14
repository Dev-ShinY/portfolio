"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { COLOR_ARRAY } from "@/utils/constants";
import { Skill } from "@/types/type";
import { useIsMobile } from "@/hooks/useIsMobile";
import { getMappedIcon } from "@/utils/skillMapper";

export default function RotatingPentagon({
  skills,
  setSelectedIdx,
}: {
  skills: Skill[];
  setSelectedIdx: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const isMobile = useIsMobile();

  const angle = Math.max(skills.length, 4);
  const N = isMobile ? 90 : 140; // 모바일이면 80, 아니면 140
  const PI = Math.PI;
  const R = N / (2 * Math.sin(PI / angle));

  const calculateTrianglePoints = (index: number) => {
    const calculatePoint = (vertexIndex: number) => {
      const theta = ((2 * PI) / angle) * vertexIndex;
      return {
        x: parseFloat((R * Math.cos(theta)).toFixed(3)),
        y: parseFloat((R * Math.sin(theta)).toFixed(3)),
      };
    };

    const p1 = calculatePoint(index);
    const p2 = calculatePoint(index + 1);

    const midPoint = {
      x: (p1.x + p2.x) / 2,
      y: (p1.y + p2.y) / 2,
    };

    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;

    const textOffset = isMobile ? 10 : 20;
    const hoverPolygonOffset = isMobile ? 10 : 20;

    const length = Math.sqrt(dx * dx + dy * dy);
    const normalX = (dy / length) * textOffset;
    const normalY = (-dx / length) * textOffset;

    const textPosition = {
      x: midPoint.x + normalX,
      y: midPoint.y + normalY,
    };

    const hoverPosition = {
      x: (dy / length) * hoverPolygonOffset,
      y: (-dx / length) * hoverPolygonOffset,
    };

    return {
      points: `${p1.x},${p1.y} ${p2.x},${p2.y} 0,0`,
      textPosition,
      hoverPosition,
      rotationAngle: (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / PI,
      vertices: [p1, p2, { x: 0, y: 0 }],
    };
  };

  const trianglePoints = useMemo(
    () => skills.map((_, index) => calculateTrianglePoints(index)),
    [skills, isMobile]
  );

  const allVertices = useMemo(
    () => trianglePoints.flatMap((t) => t.vertices),
    [trianglePoints]
  );
  const minX = Math.min(...allVertices.map((p) => p.x));
  const maxX = Math.max(...allVertices.map((p) => p.x));
  const minY = Math.min(...allVertices.map((p) => p.y));
  const maxY = Math.max(...allVertices.map((p) => p.y));

  const svgWidth = maxX - minX;
  const svgHeight = maxY - minY;
  const viewBox = `${minX - 50} ${minY - 50} ${svgWidth + 100} ${
    svgHeight + 100
  }`;

  return (
    <div className={clsx("flex-center")}>
      <motion.svg
        width={svgWidth + 100}
        height={svgHeight + 100}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: 360 }}
        transition={{ duration: 100, ease: "linear", repeat: Infinity }}
        style={{ willChange: "transform" }}
      >
        {trianglePoints.map(
          ({ points, textPosition, hoverPosition, rotationAngle }, index) => {
            const skill = skills[index];
            const imgSize = isMobile ? 25 : 40;
            const theme = "light";

            return (
              <motion.g
                key={index}
                whileHover={{ x: hoverPosition.x, y: hoverPosition.y }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedIdx(index)}
              >
                <motion.polygon
                  points={points}
                  fill={COLOR_ARRAY[index % COLOR_ARRAY.length]}
                />
                <image
                  href={`/api/skill-icon?icon=${getMappedIcon(
                    skill.name
                  )}&theme=${theme}`}
                  width={imgSize}
                  height={imgSize}
                  x={textPosition.x - imgSize / 2}
                  y={textPosition.y + imgSize * 0.7}
                  transform={`rotate(${rotationAngle} ${textPosition.x} ${textPosition.y})`}
                />
                <text
                  x={textPosition.x}
                  y={textPosition.y}
                  textAnchor="middle"
                  fill="#b8b8b8"
                  fontSize={isMobile ? 14 : 16}
                  transform={`rotate(${rotationAngle} ${textPosition.x} ${textPosition.y})`}
                >
                  {skill.name}
                </text>
              </motion.g>
            );
          }
        )}
      </motion.svg>
    </div>
  );
}
