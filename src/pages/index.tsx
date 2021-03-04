import Sky from '../components/Sky'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Work from '../components/Work'
import Music from '../components/Music'

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
        <Music />
      </Box>
    </>
  )
}

export default Home
