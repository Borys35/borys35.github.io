import { css } from "@emotion/react";
import React, { FC } from "react";
import Label from "../common/Label";
import Text from "../common/Text";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  labels: string[];
}

const AboutSkillItem: FC<Props> = ({ title, labels, ...props }) => {
  return (
    <div {...props}>
      <div
        css={(theme) =>
          css({
            width: "4rem",
            height: ".25rem",
            backgroundColor: theme.colors.primary,
            borderRadius: "4rem",
            marginBottom: "0.75rem",
            marginLeft: "1rem",
          })
        }
      ></div>
      {/* <Heading
        level={5}
        css={css({
          marginBottom: "1.5rem",
        })}
      >
        {title}
      </Heading> */}
      <Text
        transform="lowercase"
        size="large"
        css={css({
          marginBottom: "1.5rem",
          fontWeight: "normal",
        })}
      >
        {title}
      </Text>
      <div
        css={css({
          marginLeft: "1rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
        })}
      >
        {labels.map((label) => (
          <Label title={label} />
        ))}
      </div>
    </div>
  );
};

export default AboutSkillItem;
