import {
    useColorMode,
} from '@chakra-ui/core'
import {
    Layout
} from '../helper'
import { useState, useEffect } from 'react'
import { config } from '../config'
const settings = config.gallery

export default () => {
    const { colorMode } = useColorMode();
    const [bg, setBg] = useState('');

    useEffect(()=>{
        setBg(settings.bg[colorMode])
    }, [colorMode])

    return (
        <Layout title="Gallery" bg={bg}>
        </Layout>
    )
}