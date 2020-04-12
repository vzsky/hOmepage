import {
    useColorMode,
    Box,
} from '@chakra-ui/core'
import { 
    Layout,
} from '../helper'
import { useState, useEffect } from 'react'
import Code from './Code/Code'
import { config } from '../theme'
const settings = config.work

export default () => {
    const { colorMode } = useColorMode();
    const [bg, setBg] = useState('');

    useEffect(()=>{
        setBg(settings.bg[colorMode])
    }, [colorMode])

    return (
        <Layout title="What I do" bg={bg}>
            <Box width='34%'>
                oiprog
            </Box>
            <Box width='66%'>
                <Code/>
            </Box>
        </Layout>
    )
}