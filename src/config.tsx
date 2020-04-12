import { theme as Chakratheme } from "@chakra-ui/core";

export const theme = {
    ...Chakratheme
};

export const config = {
    breakpoint : {
        sm : 480
    },
    home : {
        sky: {
            light : 'white',
            dark : 'gray.700',
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
    about : {
        bg : {
            light : 'red.100',
            dark : 'red.300',
        },
        pic : {
            light : 'assets/about/selflight.jpeg',
            dark : 'assets/about/selfdark.jpeg',
        },
        social : {
            icons : [
                {href:'https://codeforces.com/profile/my99n', icon:'codeforces'},
                {href:'https://www.facebook.com/tenninox', icon:'facebook'},
                {href:'https://www.instagram.com/my99.n/', icon:'instagram'},
                {href:'https://github.com/vzsky', icon:'github'},
                {href:'https://t.me/my99n', icon:'telegram'},
                {href:'mailto:talay@layki.net', icon:'mail'},
                {href:'https://www.linkedin.com/in/touchs/', icon:'linkedin'},
            ],
            color : {
                focus : {
                    dark : 'black',
                    light : 'white',
                },
                def : {
                    dark : 'white',
                    light : 'black',
                }
            }
        }
    },
    work : {
        bg : {
            dark : 'blue.400',
            light : 'blue.100'
        },
        code : { 
            editor : {// edit the css files
                dark : 'monokai',
                light : '3024-day',
            },
            select : {
                bg : {
                    dark : '#444',
                    light : 'white',
                },
                mainText : {
                    dark : 'white',
                    light : 'black'
                }
            }
        },
        codeforces : {
            handle : 'my99n',
            color : (rating:number) : string => {
                if (rating >= 3000) return '#000000'
                if (rating >= 2600) return '#AA0000'
                if (rating >= 2400) return '#FF5555'
                if (rating >= 2300) return '#FF9900'
                if (rating >= 2100) return '#FFCC00'
                if (rating >= 1900) return '#FF00AA'
                if (rating >= 1600) return '#8800FF'
                if (rating >= 1400) return '#00CCCC'
                if (rating >= 1200) return '#00FF00'
                return '#CCCCCC'
            }
        }
    },
    gallery : {
        bg : {
            dark : 'yellow.500',
            light : 'yellow.100'
        }
    },
}