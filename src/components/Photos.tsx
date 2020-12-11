import list from '../config/gallery'

export const photolight = list.map(
  (val: { width: number; height: number }, idx: number) => {
    return {
      src: `photos/full/${idx + 1}.jpg`,
      thumbnail: `photos/light/${idx + 1}.jpeg`,
      thumbnailWidth: val.width,
      thumbnailHeight: val.height,
    }
  }
)

export const photodark = list.map(
  (val: { width: number; height: number }, idx: number) => {
    return {
      src: `photos/full/${idx + 1}.jpg`,
      thumbnail: `photos/dark/${idx + 1}.jpeg`,
      thumbnailWidth: val.width,
      thumbnailHeight: val.height,
    }
  }
)
