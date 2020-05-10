import { Text, Box, Flex, Input, useColorMode } from '@chakra-ui/core'
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { GetApi } from '../helper'
import { config } from '../config'
const settings = config.work.codeforces

export default () => {
  const { colorMode } = useColorMode()
  const [inputBg, setInputBg] = useState('')
  useEffect(() => {
    setInputBg(settings.inputBg[colorMode])
  }, [colorMode])

  const [handle, setHandle] = useState(settings.handle)
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    const effect = async () => {
      let GithubApi = `https://api.github.com/users/${handle}/repos`
      const res = await GetApi(GithubApi)
      if (res === undefined) {
        setShowResult(false)
        return
      }
      setShowResult(true)
      console.log(res)
    }
    effect()
  }, [handle, colorMode])

  return (
    <Box>
      <Flex wrap="wrap">
        <Text
          width={['100%', '100%', '50%']}
          alignSelf="center"
          justifySelf="center"
          fontSize={['sm', 'md', 'lg']}
        >
          Codeforces of
        </Text>
        <Box width={['100%', '100%', '50%']}>
          <Input
            bg={inputBg}
            value={handle}
            onChange={(e: any) => setHandle(e.target.value)}
          />
        </Box>
      </Flex>
      <Box height="300px" paddingTop={5}>
        {showResult && <h1>RESULT</h1>}
      </Box>
    </Box>
  )
}
