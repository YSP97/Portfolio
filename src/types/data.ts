export interface Project {
    id: string;
    title: string;
    description: string;
    stack: string[];
    thumbnail: string;
    link?: string;
    github?: string;
}

export interface AboutMe{
    title: string;
    description: string;
}

export interface ExperienceItem{
    id: string;
    icon: string;
    name: string;
    peroid: string;
    description: string;
    desc2?: string[];
}

export interface Skills{
    icon: string;
    name: string;
}