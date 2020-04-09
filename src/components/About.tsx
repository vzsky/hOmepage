import {
    Box,
    Text,
    Flex,
    Icon,
    Stack
} from '@chakra-ui/core'
import {
    Half,
    Image,
} from '../helper'

export default () => {

    return (
        <Flex height='100%' width='100%' bg='red.100' justifyContent='center'>
            <Box width='1200px' p='5%s' paddingX='5%'>
                <Text fontSize='6xl' minH='100px' h='20%' > About Me </Text>
                <Half>
                    <Text fontSize={['md', 'xl', '2xl', '3xl']} bg='red.100' p='1%'>
                        my name is Touch <br/>
                        yay
                    </Text>
                    <Half>
                        <Flex justifyContent='flex-end' paddingX={5} p={5}>
                            <Stack justify='space-between'>
                                <Icon name='phone'/> 
                                <Icon name='phone'/> 
                                <Icon name='phone'/> 
                                <Icon name='phone'/> 
                            </Stack>
                        </Flex>
                        <Image src='assets/about/selflight.jpeg'/>
                    </Half>
                </Half>
            </Box>
        </Flex>
    )
}