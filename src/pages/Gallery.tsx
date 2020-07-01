import { useColorMode, Box, Image } from '@chakra-ui/core'
import { Layout, Prop } from '../helper'
import { useState, useEffect } from 'react'
import Gallery from 'react-grid-gallery'
import { photolight, photodark } from '../components/Photos'
import { config } from '../config/config'
const settings = config.gallery

const Thumbnail = (props: Prop) => {
  return (
    <Image
      src={props.imageProps.src}
      objectFit="cover"
      width="100%"
      height="100%"
    />
  )
}

export default () => {
  const { colorMode } = useColorMode()
  const [bg, setBg] = useState('')
  const [photos, setPhotos] = useState(photolight)

  useEffect(() => {
    setBg(settings.bg[colorMode])
    setPhotos(colorMode === 'light' ? photolight : photodark)
  }, [colorMode])

  return (
    <Layout title="Gallery" bg={bg}>
      <Box width={'100%'} p={3}>
        <Gallery
          enableImageSelection={false}
          images={photos}
          showImageCount={false}
          thumbnailImageComponent={Thumbnail}
        />
      </Box>
    </Layout>
  )
}
