import Sky from '../components/Sky'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Work from '../components/Work'

import ReactPageScroller from "react-page-scroller"

const Home = () => (
    <ReactPageScroller>
        <Sky />
        <About />
        <Work />
        <Gallery />
    </ReactPageScroller>
)

export default Home
