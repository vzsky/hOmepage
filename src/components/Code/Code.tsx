import {UnControlled as CodeMirror} from 'react-codemirror2'
import { useColorMode, Flex, Box, Button, Divider } from '@chakra-ui/core'
import { useEffect, useState } from 'react'
import Select from 'react-select'
import { config } from '../../theme'
import SelectStyle from './SelectStyle'
import languages from './Languages'
const settings = config.work.code

export default () => {
    const { colorMode } = useColorMode();
    const [ theme, setTheme ] = useState('')
    const [ lang, setLang ] = useState(languages[0].mode)
    const [ headBg, setHeadBg ] = useState(languages[0].mode)
    const [ code, setCode ] = useState(languages[0].code)

    useEffect(()=>{
        setTheme(settings.editor[colorMode])
        setHeadBg(settings.select.bg[colorMode])
    }, [colorMode])

    const onSelect = (val:any) => {
        setLang(val['mode'])
        setCode(val['code'])
    }

    return (
        <>
            <Flex width='100%'>
                <Box width='20%' height={'38px'} rounded={5} p={2} alignSelf='center' justifySelf='center' bg={headBg}>
                    I speak
                </Box>
                <Box width='80%' >
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
                    lineNumbers: true,
                    foldGutter: true,
                    gutters: [
                        'CodeMirror-linenumbers',
                    ],
                }}
            />
        </>
    )
}