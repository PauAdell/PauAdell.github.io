import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>("/src/assets/**/*.{jpg,jpeg,png,webp}", { eager: true });

/** Finds an image under src/assets by folder and file name, failing the build if it is missing. */
export function resolveImage(folder: string, file: string): ImageMetadata {
  const found = images[`/src/assets/${folder}/${file}`];
  if (!found) throw new Error(`Image not found: src/assets/${folder}/${file}`);
  return found.default;
}
