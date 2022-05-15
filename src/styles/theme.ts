const colors = {
  primary: "#E74032",
  text: "#113BAE",
  bg: "#FDFFFF",
  bgDarker: "#ECF0F0",
  black: "#000",
};

const fontFamily = "'Poppins', sans-serif";

const horizontalPadding = "clamp(1rem, 5vw, 3rem)";

const timing = "cubic-bezier(.14,.79,.54,.98)";

const bp: { [key: string]: number } = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
  xxxl: 1920,
};

const mq = Object.keys(bp).reduce((acc, key) => {
  acc[key] = `@media (min-width: ${bp[key]}px)`;
  return acc;
}, {} as { [key: string]: string });

const theme = {
  colors,
  fontFamily,
  horizontalPadding,
  timing,
  bp,
  mq,
};

export default theme;
