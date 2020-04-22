import Sky from './Sky'
import About from './About'
import Gallery from './Gallery'
import Work from './Work'

import { Box } from '@chakra-ui/core'
import { useEffect, useState } from 'react'
import { Loading } from '../helper'

const Home = () => {
    const [state, setState] = useState('loading')
    useEffect(() => {
        setState('ready')
    }, [])
    if (state === 'loading') return <Loading />
    return (
        <>
            <Sky />
            <Box>
                <About />
                <Work />
                <Gallery />
            </Box>
        </>
    )
}

export default Home
