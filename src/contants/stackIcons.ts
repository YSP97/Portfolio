import type { IconType } from "react-icons";
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
} from "react-icons/si";

export const STACK_ICON_MAP: Record<string, IconType> = {
  React: SiReact,
  TypeScript: SiTypescript,
  TailwindCSS: SiTailwindcss,
  "Next.js": SiNextdotjs,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss,
  Git: SiGit,
  Figma: SiFigma,
};