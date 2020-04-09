import { theme } from "@chakra-ui/core";

export default  {
    ...theme
};

export const config = {
    home : {
        sky: {
            light : 'white',
            dark : 'gray.500',
        },
        sun: 'assets/sky/sun.gif',
        moon: 'assets/sky/moon.gif',
        cloud: ['',
            'assets/sky/cloud1.gif',
            'assets/sky/cloud2.gif',
        ],
        wave: ['',
            'assets/sky/wave1.gif',
            'assets/sky/wave2.gif',
            'assets/sky/wave3.gif',
        ],
    },
}