// This function converts a tag name to a string
// It makes tags prettier

import { Tag } from "../../typings";

export const convertTag = (tag: Tag): string => {
  switch (tag) {
    case "react":
      return "React";
    case "vue":
      return "Vue";
    case "svelte":
      return "Svelte";
    case "nextjs":
      return "Next.js";
    case "gatsby":
      return "Gatsby";
    case "typescript":
      return "TypeScript";
    case "firebase":
      return "Firebase";
    case "nodejs":
      return "Node.js";
    case "reactnative":
      return "React Native";
    default:
      return (tag as string).replace(/\b\w/g, (l) => l.toUpperCase());
  }
};
