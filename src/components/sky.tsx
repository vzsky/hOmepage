import { useState } from 'react'
import {
    Flex,
    Box,
    Text,
} from '@chakra-ui/core'
import {
    Prop,
    useWindowSize,
    Image,
    Draggable,
} from '../helper'
import { config } from '../theme'
const settings = config.home

const Sun = (props:Prop) => (
    <Box width='20%' maxW='200px' position='absolute' top={props.top} left={props.left}>
        <Image onClick={props.toggleMode} src={settings.sun}/>
    </Box>
)

const Moon = (props:Prop) => (
    <Box width='20%' maxW='200px' position='absolute' top={props.top} left={props.left}>
        <Image onClick={props.toggleMode} src={settings.moon}/>
    </Box>
)

const Cloud = (props:Prop) => (
    <Draggable handle = '.drag'>
        <Box className = 'drag' width='25%' maxW='250px' position='absolute' top={props.top} left={props.left}>
            <Image src={settings.cloud[props.order]} />
        </Box>
    </Draggable>
)

const Wave = (props:Prop) => (
    <Draggable handle = {`.drag`}>
        <Box className='drag' width='25%' maxW='350px' position='absolute' top={props.top} left={props.left}>
            <Image src={settings.wave} />
        </Box>
    </Draggable>
)

const Horizontal = (props:Prop) => {
    let bg:string = props.mode === 'night'
        ? settings.nightbg
        : settings.daybg
    let Float:JSX.Element = props.mode === 'night'
        ? <Moon toggleMode={props.toggleMode} top='10%' left='5%'/>
        : <Sun toggleMode={props.toggleMode} top='10%' left='5%'/>
    return (
        <Box width='100%' height='100%' bg={bg}>
            {Float}
            <Cloud order={1} top='10%' left='60%' />
            <Cloud order={2} top='30%' left='75%' />
            <Wave top='50%' left='30%'/>
            <Wave top='70%' left='10%'/>
            <Wave top='70%' left='50%'/>
        </Box>
    )
}

const Vertical = (props:Prop) => (
    <Box width='100%' height='100%' bg={props.bg}>
        <Text> Under Development </Text>
    </Box>
)

const Sky =  () => {
    const window = useWindowSize();
    const [mode, setMode] = useState('day')

    let direction = (window.width > window.height)
        ? 'horizontal'
        : 'vertical'

    const toggleMode = () => {
        let newmode = mode === 'night'
            ? 'day'
            : 'night'
        setMode(newmode)
    }

    if (direction === 'horizontal')
        return <Horizontal toggleMode={toggleMode} mode={mode}/>
    if (direction === 'vertical')
        return <Vertical toggleMode={toggleMode} mode={mode}/>

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