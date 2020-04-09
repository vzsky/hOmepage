import Sky from '../components/sky'
import Profile from '../components/Profile'

import ReactPageScroller from "react-page-scroller"

const Home = () => (
    <ReactPageScroller>
        <Sky />
        <Profile />
    </ReactPageScroller>
)

export default Home
