import { slug as slugger } from "github-slugger";

export const safeFilename = (text: string): string => {
  // Explicitly remove any path traversal characters or directory separators
  // even if slugger() might handle them, to ensure build safety.
  return slugger(text).replace(/[\/\\]/g, "").replace(/\.\./g, "");
};
