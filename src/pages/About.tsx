import { Box, Text, Flex, Stack, useColorMode } from '@chakra-ui/core'
import { Image, IconMap, useWindowSize, Prop, Layout } from '../helper'
import { Icon as Iconify } from '@iconify/react'
import { useEffect, useState } from 'react'
import { config } from '../config'
const settings = config.about

const Description = () => (
    <>
    Hey, I am Touch Sungkawichai <br/>
    I am a liberated student filled with passion about computation and mathematics. <br/>
    Please play around and enjoy my site. <br/> (Don't forget to click the sun)
    </>
)

const Icon = (props:Prop) => {
    const { colorMode } = useColorMode();
    const [defcol, setDefcol] = useState('')
    const [focus, setFocus] = useState('')
    const [color, setColor] = useState('')
    useEffect(()=>{
        setDefcol(settings.social.color.def[colorMode])
        setFocus(settings.social.color.focus[colorMode])
        setColor(settings.social.color.def[colorMode])
    }, [colorMode])
    return (
        <a
            onMouseEnter={()=>{setColor(focus)}}
            onMouseLeave={()=>{setColor(defcol)}}
            href={props.href}
            key={props.key}
        >
            <Iconify
                color={color}
                style={{'max-width': '20px'}}
                width='100%'
                icon={props.icon}
            />
        </a>
    )
}

const Social = () => {
    const window = useWindowSize();
    const [inline, setInline] = useState(true)
    useEffect( () => {
        setInline(window.width > config.breakpoint['sm'] ? false : true)
    }, [window]);

    return (
        <Stack width='100%' isInline={inline} justify='space-around'>
            { settings.social.icons.map((val, key)=>(
                <Icon 
                    key={key}
                    href={val.href}
                    icon={IconMap[val.icon]}
                />
            ))}
        </Stack>
    )
}

export default () => {
    const { colorMode } = useColorMode()
    const [bg, setBg] = useState('')
    const [pic, setPic] = useState('')
    useEffect(()=>{
        setBg(settings.bg[colorMode])
        setPic(settings.pic[colorMode])
    }, [colorMode])
    return (
        <Layout bg={bg} title="About me">
            <Box width={['100%','61%']} p={2}>
                <Text fontSize={['sm', 'md', 'xl', '2xl']}>
                    <Description/>
                </Text>
            </Box>
            <Flex width={['100%','5%']} justify='flex-end' p={1}>
                <Social />
            </Flex>
            <Box width={['100%','34%']}>
                <Image maxH='100%' maxW='100%' src={pic}/>
            </Box>
        </Layout>
    )

}