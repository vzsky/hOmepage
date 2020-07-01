import { theme as Chakratheme } from '@chakra-ui/core'

export const theme = {
  ...Chakratheme,
  colors: {
    ...Chakratheme.colors,
  },
}

export const config = {
  breakpoint: {
    sm: 480,
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
