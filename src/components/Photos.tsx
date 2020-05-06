const list = [
  { width: 300, height: 198 },
  { width: 300, height: 198 },
  { width: 300, height: 202 },
  { width: 300, height: 203 },
  { width: 300, height: 226 },
  { width: 300, height: 202 },
  { width: 300, height: 220 },
  { width: 300, height: 203 },
  { width: 300, height: 206 },
  { width: 300, height: 203 },
  { width: 300, height: 198 },
  { width: 300, height: 203 },
  { width: 300, height: 203 },
  { width: 300, height: 203 },
  { width: 300, height: 202 },
  { width: 300, height: 223 },
  { width: 300, height: 202 },
  { width: 204, height: 300 },
  { width: 300, height: 203 },
  { width: 300, height: 202 },
  { width: 300, height: 202 },
  { width: 300, height: 199 },
]

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
