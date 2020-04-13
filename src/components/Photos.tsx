const list = [
    {width: 600, height:397},
    {width: 600, height:396},
    {width: 600, height:405},
    {width: 600, height:407},
    {width: 600, height:452},
    {width: 600, height:404},
    {width: 600, height:441},
    {width: 600, height:407},
    {width: 600, height:412},
    {width: 600, height:407},
    {width: 600, height:396},
    {width: 600, height:407},
    {width: 600, height:407},
    {width: 600, height:407},
    {width: 600, height:404},
    {width: 600, height:446},
    {width: 600, height:404},
    {width: 600, height:448},
    {width: 600, height:407},
    {width: 600, height:404},
    {width: 600, height:405},
    {width: 600, height:399},
]

export const photolight = list.map((val:{width:number, height:number}, idx:number) => {
    return {
        src: `photos/full/${idx+1}.jpg`,
        thumbnail: `photos/light/${idx+1}.jpg`,
        thumbnailWidth: val.width,
        thumbnailHeight: val.height,
    }
})

export const photodark = list.map((val:{width:number, height:number}, idx:number) => {
    return {
        src: `photos/full/${idx+1}.jpg`,
        thumbnail: `photos/dark/${idx+1}.jpg`,
        thumbnailWidth: val.width,
        thumbnailHeight: val.height,
    }
})