import Image from "next/image";
import Link from "next/link";
import { styled } from "src/styles";

export const Container = styled("main", {
  maxWidth: "1510px",
  margin: "0 auto",
  padding: "1rem",
});

export const Content = styled("section", {
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: "35px",

  width: "100%",
});

export const Team = styled("div", {
  borderRadius: "12px",

  background: "$gray800",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",

  padding: "1rem",

  transition: "all 0.2s ease-in-out",
  position: "relative",

  "&:hover": { filter: "brightness(0.8)" },
});

export const TeamImageWrapper = styled("figure", {
  aspectRatio: 1,
  width: "70%",
  position: "relative",
});

export const TeamImage = styled(Image, {});

export const TeamTitle = styled("h2", {
  fontWeight: "normal",
  fontSize: "1.2rem",
});

export const TeamInfo = styled(Link, {
  position: "absolute",

  top: 8,
  right: 8,

  cursor: "pointer",
});
