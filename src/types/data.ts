export interface Project {
    id: string;
    title: string;
    description: string;
    stack: string[];
    thumnail: string;
    link?: string;
    github?: string;
}

export interface AboutMe{
    title: string;
    description: string;
}

export interface Experiences{
    id: string;
    icon: string;
    name: string;
    peroid: string;
    description: string;
}

export interface Skills{
    icon: string;
    name: string;
}