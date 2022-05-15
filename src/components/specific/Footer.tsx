import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Text from "../common/Text";

const StyledFooter = styled.footer({
  padding: "1rem 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Footer = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <StyledFooter>
      <Text size="small">&copy; {date.getFullYear()} Borys Kaczmarek</Text>
      <Text size="small">
        {date.getHours()}:
        {(date.getMinutes() <= 9 ? `0` : "") + date.getMinutes()}:
        {(date.getSeconds() <= 9 ? `0` : "") + date.getSeconds()}
      </Text>
    </StyledFooter>
  );
};

export default Footer;
