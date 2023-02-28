import { styled } from "src/styles";

export const Container = styled("div", {
  variants: {
    fullHeight: {
      true: {
        height: "calc(100vh - 8rem)",
      },
    },
  },

  maxWidth: "1510px",
  margin: "0 auto",
  padding: "4rem 1rem",

  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});
