import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

export const config = {
  breakpoint: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
  },
  work: {
    bg: {
      dark: 'blue.400',
      light: 'blue.50',
    },
  },
  gallery: {
    bg: {
      dark: 'yellow.500',
      light: 'orange.50',
    },
  },
}

const breakpoints = createBreakpoints(config.breakpoint)
export const theme = extendTheme({ breakpoints })
