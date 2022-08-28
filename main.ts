let list = [img`
    .........33.........
    ........3553........
    ......33555533......
    .....3555555553.....
    ....355555555553....
    ..3355555555555533..
    .355555555555555553.
    35555555555555555553
    35555555555555555553
    .355555555555555553.
    ..3355555555555533..
    ....355555555553....
    .....3555555553.....
    ......33555533......
    ........3553........
    .........33.........
    `]
let tile = img`
    1 . . . . . . . . . . . . . . .
    1 . . . . . . . . . . . . . . .
    . 1 . . . . . . . . . . . . . .
    . 1 . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`
let zLayer = 0
let buf = Buffer.create(120)
let variable = scene.createRenderable(zLayer, (img: Image, camera: scene.Camera) => {
    for (let x1 = 0; x1 < 9; x1++) {
        for (let y1 = 0; y1 < 8; y1++) {
            redrawImg.drawImg(x1 * 20, y1 * 16, list[tile.getPixel(x1, y1)], img)
        }
    }
    for (let index = 0; index < 160; index++) {
    img.setRows(index, buf)
    }
})
namespace redrawImg {
    export function drawImg(x: number, y: number, startImg: Image, targetImg: Image) {
        for (let xIdx = 0; xIdx < 20; xIdx++) {
            for (let yIdx = 0; yIdx < 16; yIdx++) {
                targetImg.setPixel(x + xIdx, y + yIdx, startImg.getPixel(xIdx, yIdx))
            }
        }
    }
}