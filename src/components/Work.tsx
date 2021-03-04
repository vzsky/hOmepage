import { useColorMode, Box } from '@chakra-ui/core'
import { Layout } from '../helper'
import { useState, useEffect } from 'react'
import Code from './Code/Code'
import Codeforces from './Codeforces'
import Github from './Github'
import { config } from '../config/config'
const settings = config.work

export default () => {
  const { colorMode } = useColorMode()
  const [bg, setBg] = useState('')

  useEffect(() => {
    setBg(settings.bg[colorMode])
  }, [colorMode])

  return (
    <Layout title="What I do" bg={bg}>
      <Box width={{base:'100%', sm:'100%', md:'34%'}} p={3}>
        <Codeforces />
      </Box>
      <Box width={{base:'0%', sm:'0%', md:'6%'}} />
      <Box width={{base:'100%', sm:'100%', md:'60%'}} p={3}>
        <Code />
      </Box>
      <Box width="100%">
        <Github />
      </Box>
    </Layout>
  )
}
