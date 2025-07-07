export interface Skill {
  name: string;
  description: string;
}

// Section1Data
export interface Points {
  points: {
    title: string;
    description: string;
  }[];
}
export interface Section1DataType {
  subtitle: string;
  title: string;
  description: {
    heading: string;
    points: Points["points"];
    conclusion: string;
  };
}

// Section3Data
export type Project = {
  title: string;
  duration: string;
  team: string;
  type: string[];
  description: string;
  contributions: { role: string; details: string }[];
  features: string[];
  skills: {
    [key: string]: {
      purpose: string;
      reason: string;
    };
  };
  retrospective: {
    title: string;
    content: string[];
    result: string[];
  }[];
  mainImg: string;
  screenshots: { description: string; imageUrl: string }[];
};

export type ProjectDetails = {
  [key: string]: Project;
};
