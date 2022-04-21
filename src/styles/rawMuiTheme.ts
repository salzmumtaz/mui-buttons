import { PaletteMode } from "@mui/material";

/**
 * NOTE: We cannot import or require ANYTHING in this file!
 * It is BOTH imported and linked by SnowPack in a React app,
 * AND dynamically imported ( via await import(<filname>) ) into a node utility running in '--harmony' mode.
 * It must also have the '*.mjs' extension
 */

const SPACING_BASE = 8;
const MAX_CONTAINER_WIDTH = 1200;

// https://uxplanet.org/responsive-design-best-practices-c6d3f5fd163b
const BREAKPOINTS = {
  values: {
    xs: 0,
    sm: 420,
    md: 780,
    lg: 1080,
    xl: 1366,
  },
};

const PALETTE: {
  [key: string]: any;
} = {
  common: {
    black: "#000",
    white: "#fff",
  },
  primary: {
    main: "#008BCC",
    dark: "#006391",
    light: "#54B1DD",
    contrastText: "#fff",
    containedHover: "#003A56",
    outlinedHover: "#E6F3FA",
    outlinedResting: "#B0DBEF",
  },
  secondary: {
    dark: "#622443",
    main: "#8A325F",
    light: "#B17694",
    contrastText: "#fff",
    containedHover: "#3A1528",
    outlinedHover: "#F3EBEF",
    outlinedResting: "#DBBFCD",
  },
  error: {
    dark: "#E31B0C",
    main: "#F44336",
    light: "#F88078",
    contrastText: "#fff",
    containedHover:
      " linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), #F44336",
    outlinedHover: "#F4433614",
    outlinedResting: "#F4433680",
  },
  warning: {
    main: "#ED6C02",
    light: "#FFB547",
    dark: "#C77700",
    contrastText: "#fff",
    containedHover:
      " linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), #ED6C02",
    outlinedHover: "#ED6C0214",
    outlinedResting: "#ED6C0280",
  },
  info: {
    dark: "#0B79D0",
    main: "#2196F3",
    light: "#bf70a8",
    contrastText: "#fff",
    containedHover:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), #2196F3",
    outlinedHover: "#2196F314",
    outlinedResting: "#2196F380",
  },
  success: {
    main: "#4CAF50",
    light: "#7BC67E",
    dark: "#3B873E",
    contrastText: "#fff",
    containedHover:
      " linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), #4CAF50;",
    outlinedHover: "#4CAF5014",
    outlinedResting: "#4CAF5080",
  },
  text: {
    primary: "#000000DE",
    secondary: "#00000099",
    disabled: "#00000061",
    hint: "#6848c4",
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    default: "#fff",
    paper: "#f6f6fa",
    A100: {
      main: "#f9fafc",
      hilight: "#e8f2f9",
    },
    A200: { main: "#f1f4f9" },
    A600: {
      main: "#495671",
      hilight: "#6aadd9",
    },
    A700: { main: "#133854" },
  },
};

const SHAPE = {
  borderRadius: 4, // from default
  radius: {
    small: "2px",
    normal: "4px",
    larger: "6px",
    large: "8px",
  },
};

const EXT = {
  // :aa TO MOVE to layout object. (post sass cleanup)
  spacing: SPACING_BASE,
  // :aa TO REMOVE. (post sass cleanup)
  maxContainerWidth: MAX_CONTAINER_WIDTH,
};

const MIXINS = {
  toolbar: {
    height: 64,
  },

  menuButton: {
    display: "block",
    color: "inherit",

    "&.button-variant-text": {
      borderRadius: "0px",
      // marginBottom: '8px',
      paddingBottom: 0,

      "&:hover": {
        backgroundColor: "inherit",
      },
      "& > .MuiButton-label": {},
    },

    "&.button-variant-contained": {
      // marginBottom: '5px',
      paddingLeft: "12px",
      paddingRight: "12px",
      color: PALETTE.common.white,
      "&:hover": {
        color: PALETTE.text.secondary,
      },
    },

    "&.link-button": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      "&:hover": {
        textDecoration: "none",
        "& *": {
          textDecoration: "inherit",
        },
      },
    },

    paddingLeft: "6px",
    paddingRight: "6px",
    marginRight: SPACING_BASE,
    "&:last-child": {
      marginRight: 0,
    },
    minWidth: "80px",

    "& .MuiButton-endIcon": {
      marginLeft: "1.5px",
    },
    "& .MuiSvgIcon-root": {
      marginRight: "-3px",
      transition: "0.5s transform ease",
    },

    "&.selected": {
      "& .MuiSvgIcon-root": {
        transform: "rotate(180deg)",
      },
    },
  },

  menuButtonLabel: {
    width: "auto",
    textTransform: "capitalize",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    ".button-variant-text &": {
      borderBottom: "3.5px transparent solid",
      "&:hover": {
        borderBottom: `3.5px ${PALETTE.primary.main} solid`,
      },
    },
  },
};

export default {
  breakpoints: BREAKPOINTS,

  spacing: SPACING_BASE,

  palette: {
    mode: "light" as PaletteMode,
    ...PALETTE,
  },

  typography: {
    fontFamily: "Roboto, sans-serif",
    htmlFontSize: 10,
    h1: {
      fontSize: "9.6rem",
      marginTop: 0,
    },
    h2: {
      fontSize: "6rem",
      marginTop: 0,
    },
    h3: {
      fontSize: "4.8rem",
      marginTop: 0,
    },
    h4: {
      fontSize: "3.4rem",
      marginTop: 0,
    },
    h5: {
      fontSize: "2.4rem",
      marginTop: 0,
    },
    h6: {
      fontSize: "2rem",
      fontWeight: 500,
      marginTop: 0,
    },
    body1: {
      fontSize: "1.6rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "1.4rem",
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: "1.6rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: "1.4rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    subtitle3: {
      fontSize: "1.6rem",
      fontWeight: 400,
      lineHeight: "1.5",
    },
    subtitle3Bold: {
      fontSize: "1.6rem",
      fontWeight: 700,
      lineHeight: "1.5",
    },
  },

  shape: SHAPE,
  mixins: MIXINS,

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::before, *::after": {
          boxSizing: "border-box",
        },

        body: {
          fontSize: "1.4rem",
        },
      },
    },

    // MuiButtonBase: {
    //   defaultProps: {
    //     disableRipple: true,
    //   },
    //   styleOverrides: {
    //     root: {
    //       fontSize: "1.4rem",
    //       lineHeight: "1.71",
    //       minWidth: "0 !important",
    //     },
    //   },
    // },

    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }: any) => {
          const color = PALETTE[ownerState?.color];
          if (color) {
            if (ownerState.variant === "contained") {
              return {
                "& split-button ": {
                  color: "red",
                },
                "&:hover": {
                  backgroundColor: color.containedHover,
                },
              };
            } else if (ownerState.variant === "outlined") {
              return {
                "&:hover": {
                  backgroundColor: color.outlinedHover,
                },
              };
            }
          }
        },
        sizeSmall: {
          fontSize: "0.8125rem",
        },
        sizeMedium: {
          fontSize: "0.875rem",
        },
        sizeLarge: {
          fontSize: ".9375rem",
        },
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "1.6rem",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: "1rem",
        },
      },
    },

    MuiContainer: {
      defaultProps: {
        disableGutters: true,
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "1.4rem",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          color: PALETTE.text.primary,
          zIndex: "initial",
          boxShadow: "none",
          borderBottom: "0.5px solid #ccc",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "0 20px 20px",
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: ({ ownerState }: any) => {
          if (ownerState.size === "small") {
            return {
              "& .MuiSvgIcon-root": {
                height: "1.042rem",
                width: "1.042rem",
              },
            };
          } else if (ownerState.size === "medium") {
            return {
              "& .MuiSvgIcon-root": {
                height: "1.25rem",
                width: "1.25rem",
              },
            };
          }
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: ({ ownerState }: any) => {
          if (ownerState.size === "small") {
            return {
              "& .MuiSvgIcon-root": {
                height: "0.938rem",
                width: "0.938rem",
              },
            };
          } else if (ownerState.size === "medium") {
            return {
              "& .MuiSvgIcon-root": {
                height: "1.125rem",
                width: "1.125rem",
              },
            };
          }
        },
      },
    },

    MuiToggleButton: {
      styleOverrides: {
        root: {
          border: "none",
          "& .MuiSvgIcon-root": {
            height: "1.125rem",
            width: "1.125rem",
          },
        },
        sizeSmall: {
          height: "2.5rem",
          width: "2.5rem",
        },
        sizeMedium: {
          height: "3rem",
          width: "3rem",
        },
        sizeLarge: {
          height: "3.5rem",
          width: "3.5rem",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          borderRadius: 0,
          boxShadow: "none",
          padding: "3.2rem",
        },
      },
    },

    MuiListSubheader: {
      styleOverrides: {
        root: {
          fontSize: "1.6rem",
        },
      },
    },

    MuiAlert: {
      styleOverrides: {
        standardSuccess: {
          backgroundColor: PALETTE.success.main,
          color: PALETTE.common.white,
          "& .MuiAlert-icon": {
            color: PALETTE.common.white,
          },
        },
        standardInfo: {
          "& .MuiAlert-icon": {
            color: PALETTE.info.main,
          },
        },
      },
    },
  },

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // extensions and additions

  ext: EXT,

  bgImageDivStyles: (url: string, ratio: number) => ({
    // ration is x / y
    // https://stackoverflow.com/questions/1495407/maintain-the-aspect-ratio-of-a-div-with-css
    backgroundImage: `url("${url}")`,
    boxSizing: "border-box",
    width: "100%",
    paddingBottom: `${100 / ratio}%`,
    backgroundSize: "cover",
  }),

  layout: {
    toolbar: {
      normal: 64,
      small: 56,
    },

    leftNav: {
      elementHeight: 46,
      width: 56,

      avatarElement: {
        height: 96,
      },
    },

    drawerMenu: {
      width: 300,
    },
  },
};
