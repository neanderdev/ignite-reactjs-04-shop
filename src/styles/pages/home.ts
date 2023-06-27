import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  marginLeft: "auto",
  minHeight: 656,
  position: "relative",
});

export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0, 0, 0, 0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong: {
      fontSize: "$lg",
      color: "$gray100",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});

export const ArrowLeft = styled('button', {
  cursor: 'pointer',
  paddingLeft: '1rem',
  paddingRight: '4.5rem',

  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  zIndex: 10,

  border: 0,
  background: 'linear-gradient(-90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)',

  '@bp': {
    paddingRight: '1rem',
  },

  '&:hover': {
    svg: {
      path: {
         fill: '$white',
      },
    },
  },
})

export const ArrowRight = styled('button', {
  cursor: 'pointer',
  paddingRight: '1rem',
  paddingLeft: '4.5rem',

  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 10,

  border: 0,
  background: 'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)',

  '@bp': {
    paddingLeft: '1rem',
  },

  '&:hover': {
    svg: {
      path: {
        fill: '$white',
      },
    },
  },
})
