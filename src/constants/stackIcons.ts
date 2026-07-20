import type { IconType } from 'react-icons';
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiFigma,
  SiMysql,
  SiPython,
  SiSupabase,
  SiReactquery,
  SiAxios,
  SiVercel,
  SiPocketbase,
  SiNetlify,
  SiVite,
  SiGsap,
  SiExpress,
  SiReactrouter,
} from 'react-icons/si';

export const STACK_ICON_MAP = {
  React: SiReact,
  TypeScript: SiTypescript,
  TailwindCSS: SiTailwindcss,
  'Next.js': SiNextdotjs,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss,
  Git: SiGit,
  Figma: SiFigma,
  MySQL: SiMysql,
  Python: SiPython,
  Supabase: SiSupabase,
  ReactQuery: SiReactquery,
  Axios: SiAxios,
  Vercel: SiVercel,
  Pocketbase: SiPocketbase,
  Netlify: SiNetlify,
  Vite: SiVite,
  Gsap: SiGsap,
  Express: SiExpress,
  Reactrouter: SiReactrouter,
} as const satisfies Record<string, IconType>;

export type StackName = keyof typeof STACK_ICON_MAP;
export type SpriteName = keyof typeof SPRITE_ICON_MAP;
export type AllStackName = StackName | SpriteName;

export const SPRITE_ICON_MAP = {
  Zustand: 'icon-zustand',
} as const;