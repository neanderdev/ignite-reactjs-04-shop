import { styled } from "@stitches/react";

export const HeaderContainer = styled("header", {
  width: "100%",
  maxWidth: 1180,
  marginInline: "auto",

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
  color: "$gray300",

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
    color: "$white",
  },
});
