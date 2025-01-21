scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    music.play(music.createSong(hex`0078000408020305001c000f0a006400f4010a00000400000000000000000000000000000000022f000400080002272a08000c0001240c00100001271000140002202a18001c000225291c002000012020002400031d242906001c00010a006400f401640000040000000000000000000000000000000002230028002c000222252c003000022225300034000222253400380002222538003c0002222507001c00020a006400f40164000004000000000000000000000000000000000314000c001000012718001c0002252938003c00022225`), music.PlaybackMode.UntilDone)
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.placeOnRandomTile(mysprite, sprites.dungeon.collectibleInsignia)
})
let mysprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
mysprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mysprite)
scene.cameraFollowSprite(mysprite)
tiles.placeOnRandomTile(mysprite, sprites.dungeon.collectibleInsignia)
info.startCountdown(30)
