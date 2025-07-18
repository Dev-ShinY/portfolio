"use client";

import clsx from "clsx";
import Image from "next/image";
import close from "@/assets/icon-close.webp";
import SkillChip from "../SkillChip";
import { useEffect, useState } from "react";
import { Project } from "@/types/type";
import SectionBlock from "./SectionBlock";
import LabelBlock from "./LabelBlock";
import useEscapeToClear from "@/hooks/useEscapeToClear";
import { useIsMobile } from "@/hooks/useIsMobile";

interface ProjectModalProps {
  setSelectedKey: React.Dispatch<React.SetStateAction<string | null>>;
  selectedKey: string | null;
}

export default function ProjectModal({
  setSelectedKey,
  selectedKey,
}: ProjectModalProps) {
  const [projectData, setProjectData] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [imagePath, setImagePath] = useState<string | undefined>(undefined);
  useEscapeToClear(setSelectedKey);
  const isMobile = useIsMobile();

  // data fetch
  useEffect(() => {
    if (!selectedKey) return;

    setLoading(true);
    setError(false);

    fetch(`/api/project-detail?projectKey=${selectedKey}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("데이터를 불러오는 데 실패했습니다.");
        }
        return res.json();
      })
      .then((data) => {
        setProjectData(data);

        try {
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          const img = require(`@/assets${data.mainImg}`).default;
          setImagePath(img.src);
        } catch {
          setImagePath(undefined);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [selectedKey]);

  return (
    <div
      data-modal
      className={clsx(
        "w-screen",
        "h-screen",
        !isMobile ? "absolute" : "fixed top-0 left-0",
        "inset-0",
        "z-30",
        "flex",
        "justify-center",
        "items-end",
        "bg-black/75",
        "backdrop-blur-md"
      )}
    >
      {loading && <p className="text-white">Loading...</p>}
      {error && (
        <p className="text-red-500">
          프로젝트 데이터를 불러오는 데 실패했습니다.
        </p>
      )}

      {projectData && (
        <div
          className={clsx(
            "bg-shiny-neutral-100",
            "flex",
            "flex-col",
            "justify-start",
            "h-[90%]",
            "md:w-[80%]",
            "w-[90%]",
            "overflow-scroll"
          )}
        >
          {/* header box */}
          <div
            className={clsx(
              "relative",
              "flex",
              "flex-col",
              "items-center",
              "z-10",
              "p-5",
              "md:p-10",
              "gap-5",
              "before:block",
              "before:absolute",
              "before:top-0",
              "before:left-0",
              "before:w-full",
              "before:bg-shiny-neutral-500",
              "before:h-[70%]",
              "before:z-[-1]",
              "after:block",
              "after:absolute",
              "after:top-0",
              "after:left-0",
              "after:w-full",
              "after:h-[70%]",
              "after:bg-gradient-to-t",
              "from-[#00000045]",
              "after:z-[-1]"
            )}
          >
            {/* skill 모음 */}
            <div className={clsx("flex", "gap-1", "flex-wrap")}>
              {projectData.skills.map((skill) => (
                <SkillChip
                  key={skill.skill}
                  icon={skill.skill}
                  focusType={"backgroundColor"}
                />
              ))}
            </div>

            {/* title */}
            <h2
              className={clsx(
                "md:text-4xl",
                "text-2xl",
                "font-bold",
                "text-shiny-neutral-100"
              )}
            >
              {projectData.title}
            </h2>

            {/* 기간, 팀 */}
            <p className={clsx("text-sm", "text-shiny-neutral-100")}>
              {projectData.duration + " (" + projectData.team + ")"}
            </p>

            <div
              className={clsx("bg-white", "p-3", "md:w-[70%]", "rounded-xl")}
            >
              <img
                src={imagePath}
                loading="lazy"
                alt="projectScreen"
                className={clsx(
                  "w-full",
                  "max-h-[480px]",
                  "rounded-xl",
                  "object-cover"
                )}
              />
            </div>
          </div>

          {/* main */}
          <div
            className={clsx(
              "flex-center",
              "flex-col",
              "md:w-[70%]",
              "m-auto",
              "gap-5",
              "px-5",
              "pb-5",
              "md:px-10",
              "md:pb-10"
            )}
          >
            <p>{projectData.description}</p>

            {/* type */}
            <div className={clsx("flex", "gap-2", "flex-wrap")}>
              {projectData.type.map((item) => (
                <div
                  key={item}
                  className={clsx(
                    "bg-shiny-neutral-900",
                    "text-shiny-neutral-100",
                    "rounded-md",
                    "py-1",
                    "px-2"
                  )}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* contributions */}
            <SectionBlock title="담당 업무" icon="💼">
              {projectData.contributions.map((item, index) => (
                <LabelBlock
                  key={index}
                  title={item.role}
                  content={<span>· {item.details}</span>}
                />
              ))}
            </SectionBlock>

            {/* features */}
            <SectionBlock title="주요 기능" icon="✨">
              {projectData.features.map((feature, index) => (
                <div key={index} className="w-full my-2">
                  · {feature}
                </div>
              ))}
            </SectionBlock>

            {/* skills */}
            <SectionBlock title="사용 기술 및 언어" icon="🔨">
              {projectData.skills.map((item, index) => (
                <LabelBlock
                  key={index}
                  title={item.skill}
                  content={
                    <>
                      <b>{item.purpose}</b>
                      <br />
                      <span>· {item.reason}</span>
                    </>
                  }
                />
              ))}
            </SectionBlock>

            {/* retrospective */}
            <SectionBlock title="회고" icon="❓❗">
              {projectData.retrospective.map((item, index) => (
                <LabelBlock
                  key={index}
                  title={item.title}
                  content={
                    <div className="space-y-2">
                      <div>
                        <p className="font-semibold">핵심 내용</p>
                        <ul
                          className={clsx(
                            "list-disc",
                            "list-inside",
                            "text-sm",
                            "text-shiny-neutral-700"
                          )}
                        >
                          {item.content.map((point: string, i: number) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold">기여도 및 효과</p>
                        <ul
                          className={clsx(
                            "list-disc",
                            "list-inside",
                            "text-sm",
                            "text-shiny-neutral-700"
                          )}
                        >
                          {item.result.map((point: string, i: number) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  }
                />
              ))}
            </SectionBlock>
          </div>
        </div>
      )}

      <button
        className={clsx(
          "rounded-full",
          "bg-shiny-neutral-700",
          "p-4",
          "fixed",
          "top-[10%]",
          "right-[5%]",
          "cursor-pointer",
          "z-20"
        )}
        onClick={() => setSelectedKey(null)}
      >
        <Image src={close} alt={"close"} height={20} width={20} />
      </button>
    </div>
  );
}
