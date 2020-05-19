import {
  Text,
  Box,
  Flex,
  Input,
  Heading,
  Link,
  Stack,
  useColorMode,
} from '@chakra-ui/core'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import { GetApi, useWindowSize, IconMap } from '../helper'
import { config } from '../config'
const settings = config.work.github

const transform = (res: any, set: any, width: number) => {
  // first 6 or 3 of not forked repos sorted randomly by sorters
  let sorters = ['pushed_at', 'stargazers_count']
  let sortby = sorters[Math.floor(Math.random() * sorters.length)]
  let first = width > config.breakpoint['sm'] ? 6 : 4

  set(
    res
      .filter((val: any) => !val.fork)
      .sort((a: any, b: any) => a[sortby] < b[sortby])
      .splice(0, first)
      .map((val: any) => ({
        name: val.name.length > 20 ? val.name.slice(0, 17) + '...' : val.name,
        url: val.html_url,
        desc: val.description
          ? val.description.length > 70
            ? val.description.slice(0, 67) + '...'
            : val.description
          : 'description is not provided',
        stars: val.stargazers_count, // restricted to 4 char
        forks: val.forks, // restricted to 4 char
        watchers: val.watchers, // restricted to 4 char
        lang: val.language,
      }))
  )
}

const Card = ({ val, mode }) => (
  <Box
    overflow="hidden"
    p={3}
    height="130px"
    borderWidth="1px"
    rounded={10}
    width={['100%', '30%']}
    mb={3}
    bg={settings.cardBg[mode]}
  >
    <Box>
      <Flex>
        <Box width="75%" overflow="hidden">
          <Flex align="baseline">
            {/* <Text pr={3}>{val.lang.slice(0, 3)}</Text> */}
            <Link href={val.url}>
              <Heading size="sm"> {val.name} </Heading>
            </Link>
          </Flex>
        </Box>
        <Flex width="25%" justifyContent="flex-end">
          <Stack isInline align="center">
            <Icon icon={IconMap['githubStar']} />
            <Text ml={1} fontSize="sm">
              212{val.stars}
            </Text>
          </Stack>
        </Flex>
      </Flex>
      <Box height="65px" overflow="hidden">
        <Text> {val.desc} </Text>
      </Box>
      <Flex justifyContent="space-between" align="baseline">
        <Stack isInline align="center">
          <Icon icon={IconMap['githubFork']} />
          <Text ml={1} fontSize="sm">
            234{val.forks}
          </Text>
          <Text> </Text>
          <Icon icon={IconMap['githubWatch']} />
          <Text ml={1} fontSize="sm">
            234{val.watchers}
          </Text>
        </Stack>
        <Text fontSize="sm"> {val.lang} </Text>
      </Flex>
    </Box>
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
  const window = useWindowSize()

  useEffect(() => {
    const effect = async () => {
      let GithubApi = `https://api.github.com/users/${handle}/repos`
      const res = await GetApi(GithubApi)
      if (res === undefined || res.message === 'Not Found') {
        setShowResult(false)
        return
      }
      setShowResult(true)
      transform(res, setResult, window.width)
    }
    effect()
  }, [colorMode, window, handle])

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
          <Flex wrap="wrap" justify="space-between">
            {result.map((val) => {
              return <Card val={val} mode={colorMode} />
            })}
          </Flex>
        )}
      </Box>
    </Box>
  )
}
