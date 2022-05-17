import styled from "@emotion/styled";
import { FaBehance } from "@react-icons/all-files/fa/FaBehance";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import React, { FC } from "react";
import SocialListItem from "./SocialListItem";

interface Props extends React.HTMLAttributes<HTMLElement> {}

const StyledList = styled.div(
  {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    fontSize: "1.5rem",
  },
  ({ theme }) => ({
    color: theme.colors.primary,
  })
);

const SocialList: FC<Props> = ({ ...props }) => {
  return (
    <StyledList {...props}>
      <SocialListItem
        iconComponent={FaGithub}
        link="https://github.com/Borys35"
      />
      <SocialListItem iconComponent={FaTwitter} link="https://twitter.com/" />
      <SocialListItem
        iconComponent={FaBehance}
        link="https://www.behance.net/boryskaczmarek"
      />
    </StyledList>
  );
};

export default SocialList;
