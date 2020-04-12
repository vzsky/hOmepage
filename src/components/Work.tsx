import {
    useColorMode,
    Box,
} from '@chakra-ui/core'
import { 
    Layout,
} from '../helper'
import { useState, useEffect } from 'react'
import Code from './Code/Code'
import Codeforces from './Codeforces'
import { config } from '../config'
const settings = config.work

export default () => {
    const { colorMode } = useColorMode();
    const [bg, setBg] = useState('');

    useEffect(()=>{
        setBg(settings.bg[colorMode])
    }, [colorMode])

    return (
        <Layout title="What I do" bg={bg}>
            <Box width={['100%', '34%']} p={3}>
                <Codeforces/>
            </Box>
            <Box width={['100%', '66%']} p={3}>
                <Code/>
            </Box>
        </Layout>
    )
}