import { css } from "@emotion/react";
import React, { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const ButtonGroup: FC<Props> = ({ children, ...props }) => {
  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "0.6rem 1rem",
        alignItems: "flex-start",
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default ButtonGroup;
