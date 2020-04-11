import Sky from '../components/Sky'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Work from '../components/Work'

import { Box } from '@chakra-ui/core'

const Home = () => (
    <>
        <Sky />
        <Box>
            <About />
            <Work />
            <Gallery />
        </Box>
    </>
)

export default Home
