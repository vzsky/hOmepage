import Sky from './Sky'
import About from './About'
import Gallery from './Gallery'
import Work from './Work'
import Music from './Music'

import { Box, useColorMode } from '@chakra-ui/core'
import { useEffect, useState } from 'react'
import { Loading } from '../helper'

const Home = () => {
  const [state, setState] = useState('loading')
  const { toggleColorMode, colorMode } = useColorMode()

  const setMode = (mode: 'dark' | 'light') => {
    if (colorMode === mode) return
    toggleColorMode()
  }

  useEffect(() => {
    let now = new Date().getHours()
    let isDay = now > 6 && now < 20
    setMode(isDay ? 'light' : 'dark')
    setState('ready')
  }, [])
  if (state === 'loading') return <Loading />
  return (
    <>
      <Sky />
      <Box>
        <About />
        <Work />
        <Gallery />
      </Box>
    </>
  )
}

export default Home
