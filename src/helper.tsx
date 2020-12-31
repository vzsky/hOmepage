import { useState, useEffect } from 'react'
import * as Chakra from '@chakra-ui/core'
import ReactDraggable from 'react-draggable'
import { Icon } from '@iconify/react'
import { IconMap } from './config/icons'
 
export type Prop = { [x: string]: any }

export const randomFromList = (s:any[]) => {
  return s[Math.floor(Math.random()*s.length)]
}

export const emToPx = (em: string) => {
  let n = parseInt(em);
  return n*16;
}

export const useWindowSize = () => {
  const isClient = typeof window === 'object'

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}

export const IconInput = (props: Prop) => {
  return (
  <Chakra.InputGroup>
    <Chakra.InputLeftElement
      pointerEvents="none"
      children={<Icon icon={IconMap[props.icon]} />}
    />
    {props.children}
  </Chakra.InputGroup>
  )
}

export const Image = (props: Prop) => (
  <Chakra.Image
    onDragStart={(e) => {
      e.preventDefault()
    }}
    {...props}
  />
)

export const Draggable = (props: Prop) => (
  <ReactDraggable handle=".drag" bounds="parent" {...props} />
)

export const Layout = (props: Prop) => (
  <Chakra.Flex direction="column" width="100%" wrap="wrap" bg={props.bg}>
    <Chakra.Box maxW="1000px" width="100%" alignSelf="center" p={5}>
      <Chakra.Box width="100%">
        <Chakra.Text fontSize={{base:'3xl', sm:'4xl', md:'5xl', lg:'6xl'}}>
          {' '}
          {props.title}{' '}
        </Chakra.Text>
      </Chakra.Box>
      <Chakra.Flex width="100%" justifyContent="stretch" wrap="wrap">
        {props.children}
      </Chakra.Flex>
    </Chakra.Box>
  </Chakra.Flex>
)

export const newapi = async (
  method: string,
  path: string,
  headers: any,
  body?: any
) => {
  let req: any = {
    method: method,
  }
  if (headers) {
    req.headers = {
      'Content-type': 'application/json',
      ...headers,
    }
  }
  if (body) {
    req.body = JSON.stringify({
      ...body,
    })
  }
  try {
    let res = await fetch(path, req)
    let json = await res.json()
    return json
  } catch (e) {
    return
  }
}

export const GetApi = async (path: string, headers?: any) => {
  return await newapi('GET', path, headers)
}

export const Loading = () => {
  const [dot, setDot] = useState('')
  useEffect(() => {
    setTimeout(() => {
      if (dot === '...') setDot('.')
      else setDot(dot + '.')
    }, 500)
  }, [dot])
  return (
    <Chakra.Flex
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Chakra.Heading> Loading {dot} </Chakra.Heading>
    </Chakra.Flex>
  )
}
