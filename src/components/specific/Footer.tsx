import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Text from "../common/Text";

const StyledFooter = styled.footer(
  {
    position: "relative",
    padding: "2rem 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.text,
    color: `${theme.colors.bg} !important`,
    "&:before": {
      position: "absolute",
      content: `""`,
      backgroundColor: theme.colors.text,
      width: "100vw",
      height: "100%",
      zIndex: -1,
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
    },
  })
);

const Footer = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <StyledFooter>
      <div>
        <Text size="xsmall">&copy; {date.getFullYear()} Borys Kaczmarek</Text>
      </div>
      <Text size="xsmall">
        {date.getHours()}:
        {(date.getMinutes() <= 9 ? `0` : "") + date.getMinutes()}:
        {(date.getSeconds() <= 9 ? `0` : "") + date.getSeconds()}
      </Text>
    </StyledFooter>
  );
};

export default Footer;
