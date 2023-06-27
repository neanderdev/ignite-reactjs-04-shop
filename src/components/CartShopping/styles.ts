import { styled } from "@stitches/react";

export const CartShoppingContainer = styled("div", {
  height: "100vh",
  width: "100%",
  maxWidth: 480,
  position: "fixed",
  top: 0,
  right: 0,
  zIndex: 50,
  display: "flex",
  flexDirection: "column",
  padding: "3rem",

  background: "$gray800",

  h2: {
    marginTop: "1rem",
    fontSize: "$lg",
  },
});

export const CloseButton = styled("button", {
  position: "absolute",
  right: "1.5rem",
  top: "1.5rem",
  cursor: "pointer",
  border: "none",
  background: "none",

  "&:hover": {
    svg: {
      path: {
        fill: "$white",
      },
    },
  },
});

export const Items = styled("div", {
  overflowY: "auto",
  marginBlock: "2rem",
  paddingRight: "1rem",

  "&::-webkit-scrollbar": {
    background: "$gray900",
    width: 6,
  },

  "&::-webkit-scrollbar-thumb": {
    background: "$gray300",
    width: 6,
  },
});

export const Item = styled("div", {
  display: "flex",
  gap: "1.25rem",
  marginBottom: "1.5rem",

  ".image-container": {
    background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    width: 102,
    height: 94,
    borderRadius: 8,
  },

  ".info": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",

    gap: ".5rem",

    span: {
      display: "block",
      fontSize: "$md",
    },

    strong: {
      marginTop: ".5rem",
      display: "block",
      fontSize: "$md",
    },

    button: {
      cursor: "pointer",
      border: "none",
      background: "none",
      fontWeight: "bold",
      color: "$green500",

      "&:hover": {
        color: "$green300",
      },
    },
  },
});

export const PurchaseDetails = styled("div", {
  marginTop: "auto",

  div: {
    display: "flex",
    justifyContent: "space-between",
  },

  "div:nth-child(2)": {
    marginTop: ".5rem",
    color: "$gray100",
    fontWeight: "bold",

    p: {
      fontSize: "$md",
    },

    span: {
      fontSize: "$xl",
    },
  },

  button: {
    width: "100%",
    marginTop: "2rem",
    backgroundColor: "$green500",
    border: 0,
    color: "$white",
    borderRadius: 8,
    padding: "1.25rem",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "$md",

    "&:hover": {
      background: "$green300",
    },
  },
});
