import { css } from "@emotion/react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { Project } from "../../../../typings";
import ProjectTag from "./ProjectTag";

interface Props extends Project {}

const ProjectItem: FC<Props> = ({ name, tags, permalink, cover }) => {
  const image = getImage(cover);

  return (
    <Link
      to={`/projects/${permalink}`}
      css={(theme) =>
        css({
          position: "relative",
          "& img": {
            transition: `0.5s ${theme.timing} !important`,
          },
          "&:hover": {
            img: {
              transform: "scale(1.1)",
            },
            ".tags": {
              opacity: 0,
            },
          },
        })
      }
    >
      {image ? (
        <GatsbyImage
          image={image}
          alt={name}
          css={css({ borderRadius: "1rem" })}
        />
      ) : (
        <div
          css={css({
            backgroundColor: "red",
            height: "200px",
          })}
        ></div>
      )}

      <div
        className="tags"
        css={(theme) =>
          css({
            position: "absolute",
            top: "1rem",
            right: "-1rem",
            display: "flex",
            alignItems: "flex-end",
            // flexDirection: "column",
            gap: "0.5rem",
            transition: `0.3s ${theme.timing}`,
          })
        }
      >
        {tags.map((tag) => (
          <ProjectTag key={`project-tag-${tag}`} tag={tag} />
        ))}
      </div>
    </Link>
  );
};

export default ProjectItem;
