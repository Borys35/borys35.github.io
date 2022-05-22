import { css } from "@emotion/react";
import { Link } from "gatsby";
import React, { FC } from "react";
import { Hidden } from "react-grid-system";
// @ts-ignore
import logo from "../../images/logo.svg";
import Text from "../common/Text";

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Logo: FC<Props> = ({ ...props }) => {
  return (
    <Text size="medium" transform="uppercase" {...props}>
      <Link
        to="/"
        css={css({
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        })}
      >
        <img src={logo} />
        <Hidden xs sm>
          Borys Kaczmarek
        </Hidden>
      </Link>
    </Text>
  );
};

export default Logo;
