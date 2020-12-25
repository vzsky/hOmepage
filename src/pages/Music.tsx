import {useColorMode, Box} from '@chakra-ui/core'
import { useEffect, useState } from 'react'
import { Layout } from '../helper'
import settings from '../config/music'
import React from 'react'
import ReactPlayer from 'react-player'
import { Carousel } from 'react-responsive-carousel';

const Slide = ({ url, isSelected }) => (
  <ReactPlayer width="100%" height="460px" url={url} playing={isSelected} />
);

const CarouselVideo = ({ data }) => {

  const customRenderItem = (item: any, props: any) => (
    <item.type {...item.props} {...props} />
  );

  const getVideo = (name: string) => `music/${name}.mp4`

  return (
    <Box>
      <Carousel
        autoPlay={false}
        emulateTouch={true}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        renderItem={customRenderItem}
     >
      {data.map((name:string, ind:number) => (
        <Slide
          url={getVideo(name)}
          isSelected={false}
          key={ind}
        />
      ))}
     </Carousel>
   </Box>
  );
 };

export default () => {
  const { colorMode } = useColorMode()
  const [bg, setBg] = useState('')
  useEffect(() => {
    setBg(settings.bg[colorMode])
  }, [colorMode])

  let songs = settings.songs

  return (
    <Layout bg={bg} title="Let's listen">
      <CarouselVideo data={songs}/>
    </Layout>
  )
}
