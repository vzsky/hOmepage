import {
    Flex,
    Box,
    Text,
    useColorMode,
    Stack,
} from '@chakra-ui/core'
import {
    Prop,
    useWindowSize,
    Image,
    Draggable,
} from '../helper'
import { config } from '../theme'
const settings = config.home

const Sun = (props:Prop) => {
    const { toggleColorMode } = useColorMode();
    return (
        <Box width='20%' maxW='200px' position='absolute' top={props.top} left={props.left}>
            <Image onClick={toggleColorMode} src={settings.sun}/>
        </Box>
    )
}

const Moon = (props:Prop) => {
    const { toggleColorMode } = useColorMode();
    return (
        <Box width='15%' maxW='150px' position='absolute' top={props.top} left={props.left}>
            <Image onClick={toggleColorMode} src={settings.moon}/>
        </Box>
    )
}

const Cloud = (props:Prop) => (
    <Draggable handle = '.drag'>
        <Box className = 'drag' width='25%' maxW='250px' position='absolute' top={props.top} left={props.left}>
            <Image src={settings.cloud[props.order]} />
        </Box>
    </Draggable>
)

const Wave = (props:Prop) => (
    <Draggable>
        <Box className='drag' width='25%' maxW='350px' position='absolute' top={props.top} left={props.left}>
            <Image src={settings.wave[props.order]} />
        </Box>
    </Draggable>
)

const Name = (props:Prop) => (
    <Text 
        position='absolute'
        fontSize={['xl', '3xl', '4xl', '5xl']}
        {...props}
    />
)

const Horizontal = (props:Prop) => {
    const { colorMode } = useColorMode();
    let Float:JSX.Element = colorMode === 'dark'
        ? <Moon top='12%' left='7%'/>
        : <Sun top='10%' left='5%'/>
    return (
        <Box width='100%' height='100%' bg={settings.sky[colorMode]}>
            {Float}
            <Draggable>
                <Name className='drag' top='33%' left='28%'> Touch </Name>
            </Draggable>
            <Draggable>
                <Name className='drag' top='44%' left='28%'> Sungkawichai </Name>
            </Draggable>
            <Cloud order={1} top='10%' left='60%' />
            <Cloud order={2} top='30%' left='75%' />
            <Wave order={2} top='70%' left='5%'/>
            <Wave order={1} top='70%' left='35%'/>
            <Wave order={3} top='70%' left='65%'/>
        </Box>
    )
}

const Vertical = (props:Prop) => {
    return (
        <Box width='100%' height='100%' bg={props.bg}>
            <Text> Under Development </Text>
        </Box>
    )
}

const Sky =  () => {
    const window = useWindowSize();

    let direction = (window.width > window.height)
        ? 'horizontal'
        : 'vertical'

    if (direction === 'horizontal')
        return <Horizontal />
    if (direction === 'vertical')
        return <Vertical />

    return (
        <Box>
            <Text>Ahh, Internal server error I supposed.</Text>
            <Text>The dev need sleep, provide him some...</Text>
        </Box>
    )
}

export default () => {
    return (
        <Flex width='100%' height='100%' overflowX='hidden'>
            <Sky /> 
        </Flex>
    )
}