import Image from "next/image";
import { Layout } from "src/components/Layout";
import { styled } from "src/styles";

export const Container = styled(Layout, {
  height: "100vh",
});

export const Content = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  gap: "73px",
  alignItems: "flex-start",

  width: "100%",
  height: "100%",
});

export const Aside = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  height: "100%",
  background: "$gray800",
  borderRadius: "12px",
});

export const AsideImageWrapper = styled("figure", {
  width: "50%",
  aspectRatio: 1,
  position: "relative",
});

export const AsideImage = styled(Image);

export const Main = styled("main", {
  display: "flex",
  flexDirection: "column",
  gap: "27px",
});

export const Title = styled("h1", {
  fontWeight: 400,
});

export const Description = styled("p", {});
