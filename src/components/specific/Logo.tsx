import { Link } from "gatsby";
import React, { FC } from "react";
import Text from "../common/Text";

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Logo: FC<Props> = ({ ...props }) => {
  return (
    <Text size="medium" transform="uppercase" {...props}>
      <Link to="/">Borys Kaczmarek</Link>
    </Text>
  );
};

export default Logo;
