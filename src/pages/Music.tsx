import { useColorMode } from '@chakra-ui/core'
import { useEffect, useState } from 'react'
import { Layout } from '../helper'
import settings from '../config/music'
import React from 'react'
import ReactPlayer from 'react-player'
import { Carousel } from 'react-responsive-carousel';

const YoutubeSlide = ({ url, isSelected }) => (
  <ReactPlayer width="100%" height="500px" url={url} playing={false} />
);

const CarouselVideo = ({ data }) => {

  const customRenderItem = (item:any, props:any) => {
    if (props.isSelected === true) console.log("This")
    console.log("i", item.props)
    console.log(props)
    return <item.type {...item.props} {...props} />
  };

  const getVideoThumb = (videoId:string) =>`https://img.youtube.com/vi/${videoId}/default.jpg`;

  const getVideoId = (url:string) => url.substr('https://www.youtube.com/watch?v='.length, url.length);
  
  const getVideoUrl = (videoId:string) => 'https://www.youtube.com/watch?v='+videoId

  const customRenderThumb = children =>
    children.map((item:any) => {
      const videoId = getVideoId(item.props.url);
  
      return <img key={videoId} src={getVideoThumb(videoId)} />;
  });

  return (
      <Carousel
       autoPlay={false}
       emulateTouch={true}
       showArrows={true}
       showThumbs={true}
       showStatus={false}
       infiniteLoop={true}
       renderItem={customRenderItem}
       renderThumbs={customRenderThumb}
     >
      {data.map((vidID:string, ind:number) => (
        <YoutubeSlide
          url={getVideoUrl(vidID)}
          isSelected={false}
          key={ind}
        />
      ))}
     </Carousel>
  );
 };

export default () => {
  const { colorMode } = useColorMode()
  const [bg, setBg] = useState('')
  useEffect(() => {
    setBg(settings.bg[colorMode])
  }, [colorMode])

  return (
    <Layout bg={bg} title="Let's listen">
      <CarouselVideo data={settings.songs}/>
    </Layout>
  )
}
