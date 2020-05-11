import { Text, Box, Flex, Input, useColorMode } from '@chakra-ui/core'

import { useEffect, useState } from 'react'
import { GetApi } from '../helper'
import { config } from '../config'
const settings = config.work.github

const transform = (res: any, set: any) => {
  // first 6 of not forked repos sorted randomly by sorters
  let sorters = ['pushed_at', 'stargazers_count']
  let sortby = sorters[Math.floor(Math.random() * sorters.length)]

  res = res.filter((val: any) => !val.fork)
  res = res.sort((a: any, b: any) => a[sortby] < b[sortby])
  res = res.splice(6)
  res = res.map((val: any) => ({
    name: val.name,
    url: val.html_url,
    desc: val.description,
    stars: val.stargazers_count,
    watchers: val.watchers,
    forkers: val.forks,
    lang: val.language,
  }))
  set(res)
}

const Card = ({ val }) => (
  <Box bg="gray.600">
    <h1> {val.name} </h1>
  </Box>
)

export default () => {
  const { colorMode } = useColorMode()
  const [inputBg, setInputBg] = useState('')
  useEffect(() => {
    setInputBg(settings.inputBg[colorMode])
  }, [colorMode])

  const [handle, setHandle] = useState(settings.handle)
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState([])

  useEffect(() => {
    const effect = async () => {
      let GithubApi = `https://api.github.com/users/${handle}/repos`
      const res = await GetApi(GithubApi)
      if (res === undefined || res.message === 'Not Found') {
        setShowResult(false)
        return
      }
      setShowResult(true)
      transform(res, setResult)
    }
    effect()
  }, [handle, colorMode])

  return (
    <Box>
      <Flex wrap="wrap">
        <Flex width={['100%', '100%', '50%']}>
          <Text
            width={['100%', '100%', '25%']}
            alignSelf="center"
            justifySelf="center"
            fontSize={['sm', 'md', 'lg']}
          >
            Github of
          </Text>
          <Box width={['100%', '100%', '30%']}>
            <Input
              bg={inputBg}
              value={handle}
              onChange={(e: any) => setHandle(e.target.value)}
            />
          </Box>
        </Flex>
      </Flex>
      <Box paddingTop={5}>
        {showResult && (
          <Box>
            {result.map((val) => {
              return <Card val={val} />
            })}
          </Box>
        )}
      </Box>
    </Box>
  )
}
