import { Flex, Box, Text, useColorMode } from '@chakra-ui/core'
import { Prop, useWindowSize, Image, Draggable, Loading } from '../helper'
import settings from '../config/home'
import { useState, useEffect } from 'react'

const AstroTextGenerator = (type: string, text: string) => {
  const AstroText = (props: Prop) => (
    <Text position="absolute" fontSize="xs" top={props.top} left={props.left}>
      {text} <br/> Click the {type}. 
    </Text>
  )
  return AstroText
}

const AstroGenerator = (src: string, width:string, maxW: string) => {
  const Astro = (props: Prop) => {
    const { toggleColorMode } = useColorMode()
    return (
      <Box
        width={width}
        maxW={maxW}
        position="absolute"
        top={props.top}
        left={props.left}
      >
        <Image onClick={toggleColorMode} src={src} />
      </Box>
    )
  }
  return Astro
}

const MoonText = AstroTextGenerator("moon", "Afraid of the dark?")
const SunText = AstroTextGenerator("sun", "Is it too sunny today?")

const Sun = AstroGenerator(settings.sun, "20%", "200px")
const Moon = AstroGenerator(settings.moon, "15%", "150px")


const Cloud = (props: Prop) => (
  <Draggable handle=".drag">
    <Box
      className="drag"
      width="25%"
      maxW="250px"
      position="absolute"
      top={props.top}
      left={props.left}
    >
      <Image src={settings.cloud[props.order]} />
    </Box>
  </Draggable>
)

const Wave = (props: Prop) => (
  <Draggable>
    <Box
      className="drag"
      width="25%"
      maxW="350px"
      position="absolute"
      top={props.top}
      left={props.left}
    >
      <Image src={settings.wave[props.order]} />
    </Box>
  </Draggable>
)

const ScrollDownText = () => (
  <Flex width="100%" justify="center">
    <Text position="absolute" bottom={[5, "5%"]} fontSize={['xs', 'sm']} justifySelf="center">
      Don't judge me by the cover, Scroll down!
    </Text>
  </Flex>
)

const FloatGenerator = (colorMode:any) => {
  let Float: JSX.Element =
  colorMode === 'dark' ? (
    <>
      <Moon top="12%" left="7%" />
      <MoonText top="6%" left="5%" />
    </>
  ) : (
    <>
      <Sun top="10%" left="5%" />
      <SunText top="6%" left="5%" />
    </>
  )
  return Float
}

const Horizontal = () => {
  const { colorMode } = useColorMode()
  let Float = FloatGenerator(colorMode)
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
          top="33%"
          left="28%"
          position="absolute"
          fontSize={['xl', '3xl', '4xl', '5xl']}
        >
          Touch <br /> Sungkawichai
        </Text>
      </Draggable>
      <Cloud order={1} top="10%" left="60%" />
      <Cloud order={2} top="30%" left="75%" />
      <Wave order={2} top="70%" left="5%" />
      <Wave order={1} top="70%" left="35%" />
      <Wave order={3} top="70%" left="65%" />
      <ScrollDownText/>
    </Box>
  )
}

const Vertical = () => {
  const { colorMode } = useColorMode()
  let Float = FloatGenerator(colorMode)
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
          top="43%"
          left="28%"
          position="absolute"
          fontSize={['xl', '3xl', '4xl', '5xl']}
        >
          Touch <br /> Sungkawichai
        </Text>
      </Draggable>
      <Cloud order={1} top="15%" left="50%" />
      <Cloud order={2} top="25%" left="65%" />
      <Wave order={2} top="80%" left="5%" />
      <Wave order={1} top="70%" left="35%" />
      <Wave order={3} top="80%" left="65%" />
      <ScrollDownText/>
    </Box>
  )
}

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
