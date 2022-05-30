import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { FC } from "react";

interface Props {
  label: string;
  checked?: boolean;
  onChange?: (e: React.MouseEvent) => void;
}

const StyledRadio = styled.span<Omit<Props, "label">>(
  {
    position: "relative",
    width: "1.5rem",
    height: "1.5rem",
    borderRadius: "50%",
    "&:after": {
      position: "absolute",
      content: `""`,
      width: "1rem",
      height: "1rem",
      top: "0.25rem",
      left: "0.25rem",
      borderRadius: "50%",
    },
  },
  ({ checked, theme }) => ({
    backgroundColor: theme.colors.bgDarker,
    "&:after": {
      backgroundColor: theme.colors.primary,
      transform: checked ? "scale(1)" : "scale(0)",
      transition: `0.3s ${theme.timing}`,
    },
  })
);

const Radio: FC<Props> = ({ label, checked = false, onChange }) => {
  return (
    <label
      onClick={onChange}
      css={css({
        display: "flex",
        alignItems: "center",
        gap: ".8rem",
        fontSize: "1.1rem",
        cursor: "pointer",
      })}
    >
      <StyledRadio checked={checked} />
      <span>{label}</span>
    </label>
  );
};

export default Radio;
