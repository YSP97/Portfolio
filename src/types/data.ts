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