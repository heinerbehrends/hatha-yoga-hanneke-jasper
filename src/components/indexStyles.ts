import { styled } from "../../stitches.config";

export const Heading = styled("h1", {
  fontFamily: "Ostrich Sans",
  fontSize: "clamp(30px,14vw, 64px)",
  lineHeight: "0.9",
  textAlign: "center",
  marginTop: "$xxl-resp",
  paddingX: "$m",
});

export const HomePageHeading = styled(Heading, {
  marginY: "$xxl-resp",
});

export const SubHeading = styled("h2", {
  color: "$blueDark",
  fontFamily: "asap",
  fontSize: "clamp(36px,1vw, 1px)",
  textAlign: "center",
  lineHeight: "$heading",
  paddingX: "$m",
  scrollMarginTop: "100px",
  marginY: "$xxl",
});

export const TextBox = styled("section", {
  backgroundColor: "$white",
  paddingX: "$m",
  marginTop: "$s",
  "& ul": {
    listStyleType: "circle",
    listStylePosition: "inside",
  },
  "@m": {
    marginTop: "$l",
  },
  "@l": {
    fontSize: "$body",
    marginTop: 0,
    // marginX: '$l',
    paddingX: "$3xl",
    paddingTop: "$xl",
    paddingBottom: "$xl",
    borderRadius: "$s-resp",
    border: "1px solid $green",
  },
});
