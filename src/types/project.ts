export interface Project {
  id: string;
  title: string;
  period: string;
  role: string;
  teamSize: string;
  features: (string | Features)[];
  summary: string;
  thumbnail?: string;
  techStack: string[];
  slides: Slides[];
}

export interface Features {
 title: string;
 items: string[];
}


export interface Slides {
  id: string;
  title: string;
  subTitle?: string;
  blocks: SlideBlock[];
}


export type SlideBlock = 
  | { type: 'paragraph'; text: string }
  | { type: 'H2'; text: string}
  | { type: 'H3'; text: string}
  | { type: 'image'; src: string; caption?: string; size?: 'contain' | 'cover' }
  | { type: 'paragraphBox'; icon?: string; paragraph: string | ParagraphItem }
  | { type: 'flowChart'; title?: string; items: FlowChartItem[] }
  | { type: 'stacks'; items: StackItem[] }
  | {
    type: 'badge'; 
    text: string;
    description?: string;

  }

  export interface StackItem {
  name: string;
  description: string;
  icon?: string;
}

export interface ParagraphItem{
  title: string;
  paragraph: string;
}

export interface FlowChartItem {
  label: string;
  sublabel?: string;
  caption?: string;
  highlight?: boolean;
  note?: string; 
}