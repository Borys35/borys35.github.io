import { GatsbyNode } from "gatsby";
import path from "path";
import { Project } from "./typings";

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
  actions,
  createNodeId,
  createContentDigest,
  getNodesByType,
}) => {
  // All projects
  const projects: Pick<Project, "name" | "permalink" | "tags" | "featured">[] =
    [
      {
        name: "Docs Drive",
        permalink: "docs-drive",
        tags: ["react", "typescript", "firebase"],
        featured: true,
      },
      {
        name: "Storyline",
        permalink: "storyline",
        tags: ["react", "typescript", "nextjs"],
        featured: true,
      },
      {
        name: "Chatting platform",
        permalink: "chatting-platform",
        tags: ["react", "typescript", "firebase"],
        featured: true,
      },
      {
        name: "Postit",
        permalink: "postit",
        tags: ["react", "nodejs"],
        featured: false,
      },
      {
        name: "My portfolio",
        permalink: "my-portfolio",
        tags: ["react", "gatsby", "typescript"],
        featured: false,
      },
      {
        name: "Roll an Item",
        permalink: "roll-an-item",
        tags: ["vue", "typescript"],
        featured: false,
      },
      {
        name: "Reading Test",
        permalink: "reading-test",
        tags: ["svelte", "typescript"],
        featured: false,
      },
      {
        name: "Calculator",
        permalink: "calculator",
        tags: ["svelte", "typescript"],
        featured: false,
      },
    ];

  // Create a node for each project
  projects.forEach((project) => {
    // Basic node model
    const node = {
      ...project,
      cover___NODE: "",
      id: createNodeId(`project-${project.permalink}`),
      internal: {
        type: "Project",
        contentDigest: createContentDigest(project),
      },
    };

    // Set cover image to node
    const coverPath = path
      .join(__dirname, `src/images/projects/${project.permalink}.png`)
      .replace(/\\/g, "/");
    const fileNodes = getNodesByType("File");
    const fileNode = fileNodes.find(
      (fileNode) => fileNode.absolutePath === coverPath
    );

    if (fileNode) node["cover___NODE"] = fileNode.id;

    // Create node
    actions.createNode(node);
  });
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const results: any = await graphql(`
    query PagesQuery {
      allProject {
        nodes {
          id
          name
          permalink
          tags
          cover {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  results.data.allProject.nodes.forEach((project: Project) => {
    actions.createPage({
      path: `/projects/${project.permalink}`,
      component: path.join(__dirname, "src/templates/project.tsx"),
      context: {
        project,
      },
    });
  });
};
