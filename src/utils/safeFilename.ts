import { slug as slugger } from "github-slugger";

export const safeFilename = (text: string): string => {
  // Explicitly remove any path traversal characters or directory separators
  // even if slugger() might handle them, to ensure build safety.
  let sanitized = slugger(text);
  let previous = "";

  do {
    previous = sanitized;
    sanitized = sanitized.replace(/[\/\\]/g, "").replace(/\.\./g, "");
  } while (sanitized !== previous);

  return sanitized;
};
