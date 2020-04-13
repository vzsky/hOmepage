import Sky from './Sky'
import About from './About'
import Gallery from './Gallery'
import Work from './Work'

import { Box } from '@chakra-ui/core'

const Home = () => {
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
