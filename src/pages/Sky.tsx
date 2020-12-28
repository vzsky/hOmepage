import { Flex, Box, Text, useColorMode } from '@chakra-ui/core'
import { Prop, useWindowSize, Image, Draggable, Loading, randomFromList } from '../helper'
import settings from '../config/home'
import { useState, useEffect } from 'react'

const FloatingTextGenerator = (type: string, texts: string[]) => {
  const AstroText = (props: Prop) => (
    <Text position="absolute" fontSize="xs" top={props.top} left={props.left}>
      {randomFromList(texts)} <br/> Click the {type}. 
    </Text>
  )
  return AstroText
}

const StillItemGenerator = (setting: any) => {
  const Item = (props: Prop) => {
    const { toggleColorMode } = useColorMode()
    return (
      <Box
        width={setting.width}
        maxW={setting.maxW}
        position="absolute"
        top={props.top}
        left={props.left}
      >
        <Image onClick={toggleColorMode} src={setting.src} />
      </Box>
    )
  }
  return Item
}

const DraggableItemGenerator = (setting: any) => {
  const Item = (props: Prop) => (
    <Draggable handle=".drag">
      <Box
        className="drag"
        width={setting[props.order].width}
        maxW={setting[props.order].maxW}
        position="absolute"
        top={props.top}
        left={props.left}
      >
        <Image src={setting[props.order].src} />
      </Box>
    </Draggable>
  )
  return Item
}

const AstroGenerator = (colorMode:any) => {
  let Astro: JSX.Element =
  colorMode === 'dark' ? (
    <>
      <Moon top="12%" left="7%" />
      {/* <MoonText top="6%" left="5%" /> */}
    </>
  ) : (
    <>
      <Sun top="10%" left="5%" />
      {/* <SunText top="6%" left="5%" /> */}
    </>
  )
  return Astro
}

const SkyGenerator = (Dimension: any) => {
  return () => {
    const { colorMode } = useColorMode()
    let Float = AstroGenerator(colorMode)
    const [sky, setSky] = useState('')
    useEffect(() => {
      setSky(settings.sky[colorMode])
    }, [colorMode])
    return (
      <Box width="100%" height="100%" bg={sky}>
        <Text /> {/* I don't know why but this fix */}
        {Float}
        <Draggable>
          <Text
            className="drag"
            top={Dimension.name.top}
            left={Dimension.name.left}
            position="absolute"
            fontSize={['xl', '3xl', '4xl', '5xl']}
          >
            Touch <br /> Sungkawichai
          </Text>
        </Draggable>
        <Cloud order={1} top={Dimension.cloud[1].top} left={Dimension.cloud[1].left} />
        <Cloud order={2} top={Dimension.cloud[2].top} left={Dimension.cloud[2].left} />
        <Wave order={2} top={Dimension.wave[2].top} left={Dimension.wave[2].left} />
        <Wave order={1} top={Dimension.wave[1].top} left={Dimension.wave[1].left} />
        <Wave order={3} top={Dimension.wave[3].top} left={Dimension.wave[3].left} />
        <ScrollDownText/>
      </Box>
    )
  }
}

const SunText = FloatingTextGenerator("sun", settings.sun.text)
const MoonText = FloatingTextGenerator("moon", settings.moon.text)
const Sun = StillItemGenerator(settings.sun)
const Moon = StillItemGenerator(settings.moon)
const Cloud = DraggableItemGenerator(settings.cloud)
const Wave = DraggableItemGenerator(settings.wave)

const ScrollDownText = () => (
  <Flex width="100%" justify="center">
    <Text position="absolute" bottom={[5, "5%"]} fontSize={['xs', 'sm']} justifySelf="center">
      Don't judge me by the cover, Scroll down!
    </Text>
  </Flex>
)

const Horizontal = SkyGenerator(settings.layout.horizontal)
const Vertical = SkyGenerator(settings.layout.vertical)

const Sky = () => {
  const window = useWindowSize()
  const [direction, setDirection] = useState(null)

  useEffect(() => {
    setDirection(window.width > window.height ? 'horizontal' : 'vertical')
  }, [window])

  if (direction === 'horizontal') return <Horizontal />
  if (direction === 'vertical') return <Vertical />
  return <Loading />
}

export default () => {
  return (
    <Flex width="100%" height="100%" overflowX="hidden">
      <Sky />
    </Flex>
  )
}
