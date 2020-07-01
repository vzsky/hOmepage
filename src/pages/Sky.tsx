import { Flex, Box, Text, useColorMode } from '@chakra-ui/core'
import { Prop, useWindowSize, Image, Draggable, Loading } from '../helper'
import settings from '../config/home'
import { useState, useEffect } from 'react'

const Sun = (props: Prop) => {
  const { toggleColorMode } = useColorMode()
  return (
    <Box
      width="20%"
      maxW="200px"
      position="absolute"
      top={props.top}
      left={props.left}
    >
      <Image onClick={toggleColorMode} src={settings.sun} />
    </Box>
  )
}

const Moon = (props: Prop) => {
  const { toggleColorMode } = useColorMode()
  return (
    <Box
      width="15%"
      maxW="150px"
      position="absolute"
      top={props.top}
      left={props.left}
    >
      <Image onClick={toggleColorMode} src={settings.moon} />
    </Box>
  )
}

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

const Horizontal = (props: Prop) => {
  const { colorMode } = useColorMode()
  let Float: JSX.Element =
    colorMode === 'dark' ? (
      <Moon top="12%" left="7%" />
    ) : (
      <Sun top="10%" left="5%" />
    )
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
    </Box>
  )
}

const Vertical = (props: Prop) => {
  const { colorMode } = useColorMode()
  let Float: JSX.Element =
    colorMode === 'dark' ? (
      <Moon top="12%" left="7%" />
    ) : (
      <Sun top="10%" left="5%" />
    )
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
