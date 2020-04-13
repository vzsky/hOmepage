import { useColorMode, Box } from '@chakra-ui/core'
import { Layout, Image, Prop } from '../helper'
import { useState, useEffect } from 'react'
import Gallery from 'react-grid-gallery'
import { photolight, photodark } from '../components/Photos'
import { config } from '../config'
const settings = config.gallery

const Thumbnail = (props:Prop) => (
    <Image {...props.imageProps}/>
)

const ThumbnailStyle = () => {
    return ({
        'height' : '100%'     
    })
}

export default () => {
    const { colorMode } = useColorMode();
    const [bg, setBg] = useState('');
    const [photos, setPhotos] = useState(photolight);

    useEffect(()=>{
        setBg(settings.bg[colorMode])
        setPhotos( colorMode==='light'
            ? photolight
            : photodark
        )
    }, [colorMode])

    return (
        <Layout title="Gallery" bg={bg}>
            <Box width={'100%'} p={3}>
                <Gallery
                    enableImageSelection={false}
                    thumbnailStyle={ThumbnailStyle}
                    images={photos} showImageCount={false}
                    thumbnailImageComponent={Thumbnail}
                />
            </Box>
        </Layout>
    )
}