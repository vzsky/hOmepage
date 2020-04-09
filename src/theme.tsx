import { theme } from "@chakra-ui/core";

export default  {
    ...theme
};

export const config = {
    home : {
        daybg: 'white',
        nightbg: 'gray.500',
        sun: 'assets/sun.gif',
        moon: 'assets/sun.gif',
        cloud: ['',
            'assets/cloud1.gif',
            'assets/cloud2.gif',
        ],
        wave: 'assets/wave.gif',
    },
}