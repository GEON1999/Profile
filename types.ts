// types.ts
export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  images: string[];
  work?: Work[];
  issues?: Issue[];
  github?: string;
  website?: string;
}

export interface Work {
  title: string;
  description: string[];
}

export interface Issue {
  title: string;
  description: string[];
  solution: string[];
  result: string[];
  tech: [string, string[]][];
}
