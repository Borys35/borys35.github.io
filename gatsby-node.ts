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
  const projects: Partial<Project>[] = [
    {
      name: "Docs Drive",
      permalink: "docs-drive",
      tags: ["react", "typescript", "firebase"],
      featured: true,
      blocks: [
        {
          heading: "About the project",
          text: "Docs Drive is really a clone of Google Docs. It's a text editor which saves your work automatically as you write. App keeps your files in built-in file explorer that you have whole access to.",
        },
        {
          text: "Since the project has some essential global data, I deciced to go with redux to share crucial information with every component so I don't need to deal with passing props which makes no sense later with extending the app",
        },
      ],
      year: "2021",
      demo: "https://docs-drive.firebaseapp.com/",
      sourceCode: "https://github.com/Borys35/Docs-Drive",
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
          blocks {
            heading
            text
          }
          year
          sourceCode
          demo
          cover {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  const projects: Project[] = results.data.allProject.nodes;

  projects.forEach((project: Project) => {
    const size = 2;
    let otherProjects = [...projects];
    otherProjects.splice(0, otherProjects.indexOf(project) + 1);
    otherProjects = otherProjects.splice(0, size);
    if (otherProjects.length < size) {
      otherProjects = [
        ...otherProjects,
        ...projects.splice(0, size - otherProjects.length),
      ];
    }

    actions.createPage({
      path: `/projects/${project.permalink}`,
      component: path.join(__dirname, "src/templates/project.tsx"),
      context: {
        project,
        otherProjects,
      },
    });
  });
};
