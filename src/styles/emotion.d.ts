import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      text: string;
      bg: string;
      bgDarker: string;
      black: string;
    };
    fontFamily: string;
    horizontalPadding: string;
    timing: string;
  }
}
