let list = [img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
`, img`
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
`, img`
    .........33.........
    ........3773........
    ......33777733......
    .....3777777773.....
    ....377777777773....
    ..3371717717717133..
    .377771771717717773.
    37777717711177177773
    37777717717177177773
    .377777777777777773.
    ..3377777777777733..
    ....377777777773....
    .....3777777773.....
    ......33777733......
    ........3773........
    .........33.........
`]
let tileMapImg = img`
    1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
`
let mySprite = sprites.create(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`, SpriteKind.Player)
controller.moveSprite(mySprite, 50, 50)
scene.cameraFollowSprite(mySprite)
mySprite.z = 100
let zLayer = 0
let buf = Buffer.create(120)
let variable = scene.createRenderable(zLayer, (image: Image, camera: scene.Camera) => {
    for (let x1 = 0; x1 < 10; x1++) {
        for (let y1 = 0; y1 < 18; y1++) {
            redrawImg.drawImg(x1 * 20 + (y1 + Math.round(camera.y / 16)) % 2 * 10 - 10 - camera.x % 20, y1 * 8 - 8 - camera.y % 16, list[tileMapImg.getPixel(x1 + Math.round(camera.left / 20), y1 + Math.round(camera.y / 16))], image)
        }
    }
    for (let index = 0; index < 160; index++) {
    }
})
namespace redrawImg {
    export function drawImg(x: number, y: number, startImg: Image, targetImg: Image) {
        for (let xIdx = 0; xIdx < 20; xIdx++) {
            for (let yIdx = 0; yIdx < 16; yIdx++) {
                if (startImg.getPixel(xIdx, yIdx) != 0) {
                    targetImg.setPixel(x + xIdx, y + yIdx, startImg.getPixel(xIdx, yIdx))
                }
            }
        }
    }
}