import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",

  "@bp": {
    height: "auto",
  },
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@bp": {
    marginTop: "2rem",
  },
});

export const ShoppingCartButton = styled("button", {
  position: "relative",
  width: "3rem",
  height: "3rem",
  border: 0,
  borderRadius: 6,
  padding: ".75rem",

  cursor: "pointer",
  background: "$gray800",

  span: {
    position: "absolute",
    boxSizing: "content-box",
    top: "-20%",
    right: "-20%",

    width: "1.5rem",
    height: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "$white",
    fontWeight: "bold",
    fontSize: ".875rem",
    borderRadius: "50%",
    border: "3px solid $gray900",
    background: "$green500",
  },

  "&:hover": {
    svg: {
      path: {
        fill: "$gray300",
      },
    },
  },
});
