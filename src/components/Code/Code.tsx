import { UnControlled as CodeMirror } from 'react-codemirror2'
import { useColorMode, Flex, Box, Text } from '@chakra-ui/core'
import { useEffect, useState } from 'react'
import Select from 'react-select'
import SelectStyle from './SelectStyle'
import languages from './Languages'
import { useWindowSize } from '../../helper'
import { config } from '../../config/config'
import settings from '../../config/code'

export default () => {
  let randomLang = languages[Math.floor(Math.random() * languages.length)]
  const { colorMode } = useColorMode()
  const [theme, setTheme] = useState('')
  const [lang, setLang] = useState(randomLang.mode)
  const [code, setCode] = useState(randomLang.code)
  const [lineNum, setLineNum] = useState(false)

  const window = useWindowSize()

  useEffect(() => {
    setLineNum(window.width > config.breakpoint['sm'])
  }, [window])

  useEffect(() => {
    setTheme(settings.editor[colorMode])
  }, [colorMode])

  const onSelect = (val: any) => {
    setLang(val['mode'])
    setCode(val['code'])
  }

  return (
    <>
      <Flex width="100%" wrap="wrap">
        <Text
          width={['100%', '100%', '20%']}
          alignSelf="center"
          justifySelf="center"
          fontSize={['sm', 'md', 'lg']}
        >
          I speak
        </Text>
        <Box width={['100%', '100%', '80%']}>
          <Select
            isSearchable={false}
            styles={SelectStyle}
            defaultValue={randomLang}
            options={languages}
            onChange={onSelect}
          />
        </Box>
      </Flex>
      <CodeMirror
        value={code}
        options={{
          theme: theme,
          mode: lang,
          lineNumbers: lineNum,
          foldGutter: true,
          gutters: ['CodeMirror-linenumbers'],
        }}
      />
    </>
  )
}
