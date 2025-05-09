const skills = [
  { icon: "vue", name: "Vue.js" },
  { icon: "js", name: "Javascript" },
  { icon: "vuetify", name: "Vuetify" },
  { icon: "vuex", name: "VueX" },
  { icon: "netlify", name: "Netlify" },
  { icon: "aws", name: "AWS" },
  { icon: "react", name: "React.js" },
  { icon: "bootstrap", name: "Bootstrap" },
  { icon: "redux", name: "Redux" },
  { icon: "nextjs", name: "Next.js" },
  { icon: "ts", name: "TypeScript" },
  { icon: "tailwind", name: "Tailwind CSS" },
  { icon: "zustand", name: "Zustand" },
  { icon: "graphql", name: "GraphQL" },
  { icon: "framer", name: "Framer Motion" },
  { icon: "vercel", name: "Vercel" },
  { icon: "leafletjs", name: "Leaflet.js" },
  { icon: "recoil", name: "Recoil" },
  { icon: "chartjs", name: "Chart.js" },
  { icon: "sheetjs", name: "Sheet.js" },
  { icon: "py", name: "Python" },
  { icon: "postgres", name: "PostgreSQL" },
  { icon: "jupyter", name: "Jupyter" },
  { icon: "scrapy", name: "Scrapy" },
  { icon: "pandas", name: "Pandas" },
  { icon: "fastapi", name: "FastAPI" },
  { icon: "postman", name: "Postman" },
  { icon: "github", name: "GitHub" },
  { icon: "selenium", name: "Selenium" },
  { icon: "docker", name: "Docker" },
  { icon: "nodejs", name: "Node.js" },
  { icon: "discordjs", name: "Discord.js" },
  { icon: "discord-player", name: "Discord Player" },
  { icon: "mongodb", name: "Mongo DB" },
  { icon: "beautifulsoup", name: "Beautiful Soup" },
  { icon: "axios", name: "Axios" },
  { icon: "scss", name: "SCSS" },
  { icon: "vuex", name: "Vuex" },
];

/**
 * 아이콘명 매핑
 * @param {string} inputName - 사용자가 입력한 아이콘명
 * @returns {string} - 매칭된 아이콘명
 */
export function getMappedIcon(inputName: string): string {
  const lowerInput = inputName.toLowerCase().replace(" ", "");
  const matchedSkill = skills.find(
    (skill) =>
      skill.icon.toLowerCase().replace(" ", "") === lowerInput ||
      skill.name.toLowerCase().replace(" ", "") === lowerInput
  );

  return matchedSkill ? matchedSkill.icon : inputName;
}
