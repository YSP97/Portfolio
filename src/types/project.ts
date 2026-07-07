type ContributionBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'bulletList'; items: string[] }
  | { type: 'cardList'; items: { title: string; description: string }[] };


interface Project {
  id: string;
  title: string;
  period: string;
  role: string;
  teamSize: number;
  features: string[];
  thumbnail: string;
  techStack: string[];
  slides: Slides[];
}

interface Slides {
  id: string;
  title: string;
  blocks: SlideBlock[];
}


type SlideBlock = 
 | { type: 'paragraph'; text: string }
  | { type: 'bulletList'; items: string[] }
  | { type: 'image'; src: string; caption?: string }
  | { type: 'imageCompare'; before: string; after: string; caption?: string }
  | { type: 'code'; language: string; code: string }
  | { type: 'callout'; variant: 'problem' | 'solution' | 'result'; text: string };