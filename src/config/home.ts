export default {
  sky: {
    light: 'white',
    dark: 'gray.700',
  },
  sun: {
    src: 'assets/sky/sun.gif',
    width: "20%",
    maxW: "200",
    text: ["More productive at night?", "Is it too sunny today?", "Are you a vampire?"]
  },
  moon: {
    src: 'assets/sky/moon.gif',
    width: "15%",
    maxW: "150",
    text: ["Afraid of the dark?", "Is it too dark tonight?", "Nyctophobia?"]
  },
  cloud: {
    1:{
      src: 'assets/sky/cloud1.gif',
      width: "25%",
      maxW: "250",
    },
    2:{
      src: 'assets/sky/cloud2.gif',
      width: "25%",
      maxW: "250",
    }
  },
  wave: {
    1:{
      src: 'assets/sky/wave1.gif',
      width: "25%",
      maxW: "350",
    },
    2:{
      src: 'assets/sky/wave2.gif',
      width: "25%",
      maxW: "350",
    },
    3:{
      src: 'assets/sky/wave3.gif',
      width: "25%",
      maxW: "350",
    }
  },
  layout: {
    horizontal : {
      name: { top: "33%", left: "28%" },
      cloud: {
        1: { top: "10%", left: "60%" },
        2: { top: "30%", left: "75%" }
      },
      wave: {
        1: { top: "70%", left: "35%" },
        2: { top: "70%", left: "5%" },
        3: { top: "70%", left: "65%" }
      }
    }, 
    vertical : {
      name: { top: "43%", left: "28%" },
      cloud: {
        1: { top: "15%", left: "50%" },
        2: { top: "25%", left: "65%" }
      },
      wave: {
        1: { top: "70%", left: "35%" },
        2: { top: "80%", left: "5%" },
        3: { top: "80%", left: "65%" }
      }
    }
  }
}
