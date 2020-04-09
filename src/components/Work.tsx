import {
    Box,
    Text,
    Flex,
} from '@chakra-ui/core'

export default () => {

    return (
        <Flex height='100%' width='100%' bg='blue.100' justifyContent='center'>
            <Box width='1200px' p='5%s' paddingX='5%'>
                <Text fontSize='6xl' minH='100px' h='20%' > My work </Text>
            </Box>
        </Flex>
    )
}