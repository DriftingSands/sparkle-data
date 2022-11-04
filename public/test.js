const mobile = [
  'sky_m.jpg',
  'rocks1_m.png',
  'rocks3_m.png',
  'biker_m.png',
  'AdobeStock_427738038.jpg',
  'sky0.jpg',
  'mountains_m.png',
  'water_m.png',
  'female-hiker.png',
  'uptothesky_sky.jpg',
  'mountain1_m.png',
  'mountain2.png',
  'mountain3_m.png',
  'tent_m.png',
]

const desktop = [
  'sky.jpg',
  'rocks1.png',
  'rocks2.png',
  'rocks3.png',
  'biker.png',
  'AdobeStock_427738038.jpg',
  'sky0.jpg',
  'mountains.png',
  'water.png',
  'female-hiker.png',
  'uptothesky_sky.jpg',
  'mountain1.png',
  'mountain2.png',
  'mountain3.png',
  'tent.png',
]

const fs = require('fs')

// desktop.forEach((item) => {
//   fs.mkdirSync(`./public/content/dam/sample-wknd-app/en/image-files/${item}/_jcr_content/renditions`, {recursive: true})
// })
// mobile.forEach((item) => {
//   fs.mkdirSync(`./public/content/dam/sample-wknd-app/en/image-files/${item}/_jcr_content/renditions`, {recursive: true})
// })

fs.mkdirSync('./public/graphql/execute.json/sample-wknd-app/homepage', {recursive: true})
