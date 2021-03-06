import { IProject } from "../types/Project";

export const GRADIENTS: string[] = [
  "#D8B4FE, #818CF8",
  "#bfdbfe, #6366f1, #6d28d9",
  "#86efac, #d8b4fe, #818cf8",
  "#f8b4fe, #818cf8, #d8b4fe",
  "#bbf7d0, #4ade80, #22c55e",
  "#ca8a04, #dc2626",
  "#99f6e4, #d9f99d",
  "#eab308, #a855f7, #3b82f6",
];

export const PROJECTS: IProject[] = [
  {
    name: "Cubedeck",
    desc: "Taking your cubing skills to the moon!",
    href: "https://cubedeck.netlify.app",
  },
  {
    name: "kitty.js",
    desc: "A JavaScript wrapper for TheCatAPI",
    href: "https://npmjs.com/package/@kittyjs/kitty-js",
  },
  {
    name: "cleansweep",
    desc: "A CLI that organizes your downloads.",
    href: "https://github.com/carrotfarmer/cleansweep",
  },
];
