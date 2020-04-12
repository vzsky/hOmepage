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
            color : {
                light : (rating:number) : string => {
                    if (rating >= 3000) return '#644'
                    if (rating >= 2600) return '#B44'
                    if (rating >= 2400) return '#D66'
                    if (rating >= 2300) return '#FA4'
                    if (rating >= 2100) return '#FF9'
                    if (rating >= 1900) return '#F9E'
                    if (rating >= 1600) return '#C7F'
                    if (rating >= 1400) return '#6DD'
                    if (rating >= 1200) return '#6D6'
                    return '#CCC'
                },
                dark : (rating:number) : string => {
                    if (rating >= 3000) return '#000'
                    if (rating >= 2600) return '#F33'
                    if (rating >= 2400) return '#D22'
                    if (rating >= 2300) return '#F933'
                    if (rating >= 2100) return '#FF0'
                    if (rating >= 1900) return '#F77F'
                    if (rating >= 1600) return '#C0F'
                    if (rating >= 1400) return '#0FF'
                    if (rating >= 1200) return '#0F0'
                    return '#EEE'
                },
            },
            inputBg : {
                light : '#FFF',
                dark : '#444'
            },
            chartOptions : {
                light : {
                    scaleFontColor: '#aaa',
                    legend : { display : false },
                    maintainAspectRatio : false,
                    scales: {
                        yAxes: [{
                            ticks: { fontColor: "#aaa" },
                            gridLines: {
                                color: '#aaa',
                                borderDash: [1, 3],
                            },
                        }],
                        xAxes: [{
                            gridLines: {
                                display : false,
                            },
                        }],
                    },
                },
                dark : {
                    legend : { display : false },
                    maintainAspectRatio : false,
                    scales: {
                        yAxes: [{
                            ticks: { fontColor: "#ddd" },
                            gridLines: {
                                color: '#ddd',
                                borderDash: [1, 3],
                            },
                        }],
                        xAxes: [{
                            gridLines: {
                                display : false,
                            },
                        }],
                    },
                },
            }
        },
    },
    gallery : {
        bg : {
            dark : 'yellow.500',
            light : 'yellow.100'
        },
    },
}