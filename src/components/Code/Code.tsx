import { UnControlled as CodeMirror } from 'react-codemirror2'
import { useColorMode, Flex, Box, Text } from '@chakra-ui/core'
import { useEffect, useState } from 'react'
import Select from 'react-select'
import { config } from '../../config'
import SelectStyle from './SelectStyle'
import languages from './Languages'
import { useWindowSize } from '../../helper'
const settings = config.work.code

export default () => {
    const { colorMode } = useColorMode()
    const [theme, setTheme] = useState('')
    const [lang, setLang] = useState(languages[0].mode)
    const [code, setCode] = useState(languages[0].code)
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
                        defaultValue={languages[0]}
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
