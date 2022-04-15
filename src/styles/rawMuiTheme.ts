import { PaletteMode } from '@mui/material'

/**
 * NOTE: We cannot import or require ANYTHING in this file!
 * It is BOTH imported and linked by SnowPack in a React app,
 * AND dynamically imported ( via await import(<filname>) ) into a node utility running in '--harmony' mode.
 * It must also have the '*.mjs' extension
 */

const SPACING_BASE = 8
const MAX_CONTAINER_WIDTH = 1200

// https://uxplanet.org/responsive-design-best-practices-c6d3f5fd163b
const BREAKPOINTS = {
  values: {
    xs: 0,
    sm: 420,
    md: 780,
    lg: 1080,
    xl: 1366,
  },
}

const PALETTE = {
  common: {
    black: '#000',
    white: '#fff',
  },
  primary: {
    main: '#008BCC',
    dark: '#00699a',
    light: '#339cd4',
    contrastText: '#fff',
  },
  secondary: {
    dark: '#96377a',
    main: '#af4c92',
    light: '#bf70a8',
    contrastText: '#fff',
  },
  error: {
    dark: '#bf253b',
    main: '#ee314c',
    light: '#f15a70',
    contrastText: '#fff',
  },
  warning: {
    main: '#ff7c24',
    light: '#ff9650',
    dark: '#ec660c',
    contrastText: '#fff',
  },
  info: {
    dark: '#0B79D0',
    main: '#af4c92',
    light: '#bf70a8',
    contrastText: '#fff',
  },
  success: {
    main: '#77c043',
    light: '#77c043',
    dark: '#61a331',
    contrastText: '#fff',
  },
  text: {
    primary: '#262626',
    secondary: '#525252',
    disabled: '#969696',
    hint: '#6848c4',
  },
  divider: 'rgba(0, 0, 0, 0.20)',
  background: {
    default: '#fff',
    paper: '#f6f6fa',
    A100: {
      main: '#f9fafc',
      hilight: '#e8f2f9',
    },
    A200: { main: '#f1f4f9' },
    A600: {
      main: '#495671',
      hilight: '#6aadd9',
    },
    A700: { main: '#133854' },
  },
}

const SHAPE = {
  borderRadius: 4, // from default
  radius: {
    small: '2px',
    normal: '4px',
    larger: '6px',
    large: '8px',
  },
}

const EXT = {
  // :aa TO MOVE to layout object. (post sass cleanup)
  spacing: SPACING_BASE,
  // :aa TO REMOVE. (post sass cleanup)
  maxContainerWidth: MAX_CONTAINER_WIDTH,
}

const MIXINS = {
  toolbar: {
    height: 64,
  },

  menuButton: {
    display: 'block',
    color: 'inherit',

    '&.button-variant-text': {
      borderRadius: '0px',
      // marginBottom: '8px',
      paddingBottom: 0,

      '&:hover': {
        backgroundColor: 'inherit',
      },
      '& > .MuiButton-label': {},
    },

    '&.button-variant-contained': {
      // marginBottom: '5px',
      paddingLeft: '12px',
      paddingRight: '12px',
      color: PALETTE.common.white,
      '&:hover': {
        color: PALETTE.text.secondary,
      },
    },

    '&.link-button': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      '&:hover': {
        textDecoration: 'none',
        '& *': {
          textDecoration: 'inherit',
        },
      },
    },

    paddingLeft: '6px',
    paddingRight: '6px',
    marginRight: SPACING_BASE,
    '&:last-child': {
      marginRight: 0,
    },
    minWidth: '80px',

    '& .MuiButton-endIcon': {
      marginLeft: '1.5px',
    },
    '& .MuiSvgIcon-root': {
      marginRight: '-3px',
      transition: '0.5s transform ease',
    },

    '&.selected': {
      '& .MuiSvgIcon-root': {
        transform: 'rotate(180deg)',
      },
    },
  },

  menuButtonLabel: {
    width: 'auto',
    textTransform: 'capitalize',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    '.button-variant-text &': {
      borderBottom: '3.5px transparent solid',
      '&:hover': {
        borderBottom: `3.5px ${PALETTE.primary.main} solid`,
      },
    },
  },
}

export default {
  breakpoints: BREAKPOINTS,

  spacing: SPACING_BASE,

  palette: {
    mode: 'light' as PaletteMode,
    ...PALETTE,
  },

  typography: {
    fontFamily: 'Roboto, sans-serif',
    htmlFontSize: 10,
    h1: {
      fontSize: '9.6rem',
      marginTop: 0,
    },
    h2: {
      fontSize: '6rem',
      marginTop: 0,
    },
    h3: {
      fontSize: '4.8rem',
      marginTop: 0,
    },
    h4: {
      fontSize: '3.4rem',
      marginTop: 0,
    },
    h5: {
      fontSize: '2.4rem',
      marginTop: 0,
    },
    h6: {
      fontSize: '2rem',
      fontWeight: 500,
      marginTop: 0,
    },
    body1: {
      fontSize: '1.6rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '1.4rem',
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: '1.6rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: '1.4rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    subtitle3: {
      fontSize: '1.6rem',
      fontWeight: 400,
      lineHeight: '1.5',
    },
    subtitle3Bold: {
      fontSize: '1.6rem',
      fontWeight: 700,
      lineHeight: '1.5',
    },
  },

  shape: SHAPE,
  mixins: MIXINS,

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },

        body: {
          fontSize: '1.4rem',
        },
      },
    },

    // MuiButtonBase: {
    //   defaultProps: {
    //     disableRipple: true
    //   },
    //   styleOverrides: {
    //     root: {
    //       fontSize: '1.4rem',
    //       lineHeight: '1.71',
    //       minWidth: '0 !important',
    //     },
    //   }
    // },

    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: '0 !important',
        },
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: '1.6rem',
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
          fontSize: '1.4rem',
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          color: PALETTE.text.primary,
          zIndex: 'initial',
          boxShadow: 'none',
          borderBottom: '0.5px solid #ccc',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '0 20px 20px',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          borderRadius: 0,
          boxShadow: 'none',
          padding: '3.2rem',
        },
      },
    },

    MuiListSubheader: {
      styleOverrides: {
        root: {
          fontSize: '1.6rem',
        },
      },
    },

    MuiAlert: {
      styleOverrides: {
        standardSuccess: {
          backgroundColor: PALETTE.success.main,
          color: PALETTE.common.white,
          '& .MuiAlert-icon': {
            color: PALETTE.common.white,
          },
        },
        standardInfo: {
          '& .MuiAlert-icon': {
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
    boxSizing: 'border-box',
    width: '100%',
    paddingBottom: `${100 / ratio}%`,
    backgroundSize: 'cover',
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
}
