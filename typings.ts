import { Node } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";

export type Tag =
  | "react"
  | "vue"
  | "svelte"
  | "typescript"
  | "nextjs"
  | "gatsby"
  | "reactnative"
  | "firebase"
  | "nodejs";
export interface Project extends Node {
  name: string;
  permalink: string;
  tags: Tag[];
  cover: ImageDataLike;
  featured: boolean;
}
