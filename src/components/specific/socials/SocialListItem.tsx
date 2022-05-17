import { css } from "@emotion/react";
import React, { FC } from "react";

interface Props {
  iconComponent: React.ComponentType;
  link: string;
}

const SocialListItem: FC<Props> = ({ iconComponent, link }) => {
  const Icon = iconComponent;

  return (
    <a
      href={link}
      target="_blank"
      css={(theme) =>
        css({
          transition: `0.25s ${theme.timing}`,
          "&:hover": {
            transform: "scale(1.25)",
          },
        })
      }
    >
      <Icon />
    </a>
  );
};

export default SocialListItem;
