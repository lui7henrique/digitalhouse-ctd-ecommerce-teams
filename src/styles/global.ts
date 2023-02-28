import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    "-webkit-font-smoothing": "antialised",
    backgroundColor: "var(--colors-gray900)",
    color: "var(--colors-gray300)",
  },

  "body, input, textarea, button": {
    fontFamily: "Space Grotesk",
    fontWeight: 400,
  },

  "h1, h2, h3, h4, h5, h6": {
    color: "white",
  },

  a: {
    textDecoration: "none",
    color: "$gray300",
  },

  p: {
    color: "$gray300",
  },
});
