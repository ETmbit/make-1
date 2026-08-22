/*
File:       github.com/ETmbit/make-1.ts
Version:	2026-1
Copyright:  ElecTricks, 2026
License:    GNU GPL 3 or later
Disclaimer: Distributed without any warranty
*/

//////////////////
//  INCLUDE     //
//  etbasic.ts  //
//////////////////

const ET_LOW = 0
const ET_HIGH = 1

enum ETpins {
    //% block="pin P0"
    //% block.loc.nl="pin P0"
    P0 = DigitalPin.P0,
    //% block="pin P1"
    //% block.loc.nl="pin P1"
    P1 = DigitalPin.P1,
    //% block="pin P2"
    //% block.loc.nl="pin P2"
    P2 = DigitalPin.P2,
    //% block="pin P8"
    //% block.loc.nl="pin P8"
    P8 = DigitalPin.P8,
    //% block="pin P12"
    //% block.loc.nl="pin P12"
    P12 = DigitalPin.P12,
    //% block="pin P13"
    //% block.loc.nl="pin P13"
    P13 = DigitalPin.P13,
    //% block="pin P14"
    //% block.loc.nl="pin P14"
    P14 = DigitalPin.P14,
    //% block="pin P15"
    //% block.loc.nl="pin P15"
    P15 = DigitalPin.P15,
    //% block="pin P16"
    //% block.loc.nl="pin P16"
    P16 = DigitalPin.P16
}

enum ETstate {
    //% block="off"
    //% block.loc.nl="uit"
    Off,
    //% block="on"
    //% block.loc.nl="aan"
    On,
}

enum ETpace {
    //% block="slow"
    //% block.loc.nl="langzame"
    Slow,
    //% block="normal"
    //% block.loc.nl="normale"
    Normal,
    //% block="fast"
    //% block.loc.nl="snelle"
    Fast,
}

/*
The ETrotate, ETturn and ETmove... enumerations
have comparable values:

Start = -1
Stop = 0
Forward = 1
Backward = 2
Left, AntiClockwise = 3
Right, Clockwise = 4
Up = 5
Down = 6
*/

enum ETrotate {
    //% block="anticlockwise"
    //% block.loc.nl="linksom"
    AntiClockwise = 3,
    //% block="clockwise"
    //% block.loc.nl="rechtsom"
    Clockwise = 4,
}

enum ETturn {
    //% block="to the left"
    //% block.loc.nl="naar links"
    Left = 3,
    //% block="to the right"
    //% block.loc.nl="naar rechts"
    Right = 4,
}

enum ETmove {
    //% block="stop"
    //% block.loc.nl="stop"
    Stop = 0,
    //% block="start"
    //% block.loc.nl="start"
    Start = -1,

}

enum ETmoveX {
    //% block="to the left"
    //% block.loc.nl="naar links"
    Left = 3,
    //% block="to the right"
    //% block.loc.nl="naar rechts"
    Right = 4,
}

enum ETmoveY {
    //% block="forward"
    //% block.loc.nl="vooruit"
    Forward = 1,
    //% block="backward"
    //% block.loc.nl="achteruit"
    Backward = 2,
}

enum ETmoveZ {
    //% block="up"
    //% block.loc.nl="omhoog"
    Up = 5,
    //% block="down"
    //% block.loc.nl="omlaag"
    Down = 6,
}

enum ETmoveXY {
    //% block="forward"
    //% block.loc.nl="naar voren"
    Forward = 1,
    //% block="backward"
    //% block.loc.nl="naar achteren"
    Backward = 2,
    //% block="to the left"
    //% block.loc.nl="naar links"
    Left = 3,
    //% block="to the right"
    //% block.loc.nl="naar rechts"
    Right = 4,
}

enum ETmoveXZ {
    //% block="to the left"
    //% block.loc.nl="naar links"
    Left = 3,
    //% block="to the right"
    //% block.loc.nl="naar rechts"
    Right = 4,
    //% block="up"
    //% block.loc.nl="omhoog"
    Up = 5,
    //% block="down"
    //% block.loc.nl="omlaag"
    Down = 6,
}

enum ETmoveYZ {
    //% block="forward"
    //% block.loc.nl="naar voren"
    Forward = 1,
    //% block="backward"
    //% block.loc.nl="naar achteren"
    Backward = 2,
    //% block="up"
    //% block.loc.nl="omhoog"
    Up = 5,
    //% block="down"
    //% block.loc.nl="omlaag"
    Down = 6,
}

enum ETmoveXYZ {
    //% block="forward"
    //% block.loc.nl="naar voren"
    Forward = 1,
    //% block="backward"
    //% block.loc.nl="naar achteren"
    Backward = 2,
    //% block="to the left"
    //% block.loc.nl="naar links"
    Left = 3,
    //% block="to the right"
    //% block.loc.nl="naar rechts"
    Right = 4,
    //% block="up"
    //% block.loc.nl="omhoog"
    Up = 5,
    //% block="down"
    //% block.loc.nl="omlaag"
    Down = 6,
}

enum ETcolor {
    //% block="red"
    //% block.loc.nl="rood"
    Red = 1,
    //% block="green"
    //% block.loc.nl="groen"
    Green = 2,
    //% block="blue"
    //% block.loc.nl="blauw"
    Blue = 3,
    //% block="yellow"
    //% block.loc.nl="geel"
    Yellow = 4,
    //% block="cyan"
    //% block.loc.nl="cyaan"
    Cyan = 5,
    //% block="magenta"
    //% block.loc.nl="magenta"
    Magenta = 6,
    //% block="black"
    //% block.loc.nl="zwart"
    Black = 7,
    //% block="dark grey"
    //% block.loc.nl="donkergrijs"
    DarkGrey = 8,
    //% block="grey"
    //% block.loc.nl="grijs"
    Grey = 9,
    //% block="light grey"
    //% block.loc.nl="lichtgrijs"
    LightGrey = 10,
    //% block="white"
    //% block.loc.nl="wit"
    White = 11,
    //% block="orange"
    //% block.loc.nl="oranje"
    Orange = 12,
    //% block="brown"
    //% block.loc.nl="bruin"
    Brown = 13,
    //% block="pink"
    //% block.loc.nl="roze"
    Pink = 14,
    //% block="indigo"
    //% block.loc.nl="indigo"
    Indigo = 15,
    //% block="violet"
    //% block.loc.nl="violet"
    Violet = 16,
    //% block="purple"
    //% block.loc.nl="paars"
    Purple = 17,
}

function etRgbValue(red: number, green: number, blue: number): number {
    let rgb = ((red & 0xFF) << 16) | ((green & 0xFF) << 8) | (blue & 0xFF)
    return rgb;
}

function etRedValue(rgb: number): number {
    let r = (rgb >> 16) & 0xFF
    return r;
}

function etGreenValue(rgb: number): number {
    let g = (rgb >> 8) & 0xFF
    return g;
}

function etBlueValue(rgb: number): number {
    let b = (rgb) & 0xFF
    return b;
}

function etFromColor(color: ETcolor): number {
    let val = 0
    switch (color) {
        case ETcolor.Red: val = 0xFF0000; break;
        case ETcolor.Green: val = 0x00FF00; break;
        case ETcolor.Blue: val = 0x0000FF; break;
        case ETcolor.Yellow: val = 0xFFFF00; break;
        case ETcolor.Cyan: val = 0x00FFFF; break;
        case ETcolor.Magenta: val = 0xFF00FF; break;
        case ETcolor.Black: val = 0x000000; break;
        case ETcolor.DarkGrey: val = 0xA9A9A9; break;
        case ETcolor.Grey: val = 0x808080; break;
        case ETcolor.LightGrey: val = 0xD3D3D3; break;
        case ETcolor.White: val = 0xFFFFFF; break;
        case ETcolor.Orange: val = 0xFFA500; break;
        case ETcolor.Brown: val = 0xA52A2A; break;
        case ETcolor.Pink: val = 0xFFC0CB; break;
        case ETcolor.Indigo: val = 0x4b0082; break;
        case ETcolor.Violet: val = 0x8a2be2; break;
        case ETcolor.Purple: val = 0x800080; break;
    }
    return val
}

function etFromRgbValues(red: number, green: number, blue: number, clearch?: number): ETcolor {

    let max = Math.max(red, Math.max(green, blue))
    let min = Math.min(red, Math.min(green, blue))

    if (Math.abs(max - min) < 60) {
        if (clearch == undefined) {
            let bright = Math.round(0.21 * red + 0.72 * green + 0.07 * blue)
            if (bright > 100) return ETcolor.White
            if (bright < 90) return ETcolor.Black
            return ETcolor.Grey
        }
        else {
            if (clearch > 75) return ETcolor.White
            if (clearch < 30) return ETcolor.Black
            return ETcolor.Grey
        }
    }

    let hue: number
    if (red == max) hue = (0 + (green - blue) / (max - min)) * 60
    if (green == max) hue = (2 + (blue - red) / (max - min)) * 60
    if (blue == max) hue = (4 + (red - green) / (max - min)) * 60

    if (hue < 0) hue += 360

    // translate hue to color names
    if (hue < 20) return ETcolor.Red
    if (hue < 50) return ETcolor.Orange
    if (hue < 100) return ETcolor.Yellow
    if (hue < 190) return ETcolor.Green
    if (hue < 206) return ETcolor.Cyan
    if (hue < 230) return ETcolor.Blue
    if (hue < 272) return ETcolor.Purple
    if (hue < 300) return ETcolor.Magenta

    return ETcolor.Red
}

function etFromRgb(rgb: number): ETcolor {
    let red = etRedValue(rgb)
    let green = etGreenValue(rgb)
    let blue = etBlueValue(rgb)
    return etFromRgbValues(red, green, blue)
}

//% color="#61CBF4" icon="\uf075"
//% block="General"
//% block.loc.nl="Algemeen"
namespace etbasic {

    //% color="#008800"
    //% block="comment: %dummy"
    //% block.loc.nl="uitleg: %dummy"
    //% dummy.defl="schrijf hier je uitleg"
    export function comment(dummy: string) {
    }

    //% block="a number from %min upto %max"
    //% block.loc.nl="een getal van %min t/m %max"
    //% min.defl=0 max.defl=10
    export function randomInt(min: number, max: number): number {
        let i = 0
        if (min > max) {
            i = min
            min = max
            max = i
        }
        i = max - min + 1
        i = min + Math.floor(Math.random() * i)
        return i
    }

    //% block="wait %sec seconds"
    //% block.loc.nl="wacht %sec seconden"
    export function wait(sec: number) {
        basic.pause(sec * 1000)
    }
}

///////////////////
//  END INCLUDE  //
///////////////////

/////////////////////////////
//  INCLUDE                //
//  etbuttonpad-shared.ts  //
/////////////////////////////

enum ETbuttonPad {
    //% block="no button"
    //% block.loc.nl="geen knop"
    None,
    //% block="button OK"
    //% block.loc.nl="de OK-knop"
    Ok,
    //% block="the up arrow"
    //% block.loc.nl="het pijltje omhoog"
    Up,
    //% block="the down arrow"
    //% block.loc.nl="het pijltje omlaag"
    Down,
    //% block="the left arrow"
    //% block.loc.nl="het pijltje naar links"
    Left,
    //% block="the right arrow"
    //% block.loc.nl="het pijltje naar rechts"
    Right,
    //% block="the top left button"
    //% block.loc.nl="de knop linksboven"
    TopLeft,
    //% block="the top right button"
    //% block.loc.nl="de knop rechtsboven"
    TopRight
}

/////////////////
// END INCLUDE //
/////////////////

////////////////////////////
//  INCLUDE               //
//  etbuttonpad-local.ts  //
////////////////////////////

type handler = () => void

let buttonpadNoneHandler: handler
let buttonpadOkHandler: handler
let buttonpadUpHandler: handler
let buttonpadDownHandler: handler
let buttonpadLeftHandler: handler
let buttonpadRightHandler: handler
let buttonpadTopLeftHandler: handler
let buttonpadTopRightHandler: handler

let ETpad = ETbuttonPad.None

basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P9) == 1 && ETpad != ETbuttonPad.TopLeft) {
        ETpad = ETbuttonPad.TopLeft
        if (buttonpadTopLeftHandler) buttonpadTopLeftHandler()
        while (pins.digitalReadPin(DigitalPin.P9) == 1) basic.pause(1)
    } else
    if (pins.digitalReadPin(DigitalPin.P8) == 1 && ETpad != ETbuttonPad.TopRight) {
        ETpad = ETbuttonPad.TopRight
        if (buttonpadTopRightHandler) buttonpadTopRightHandler()
        while (pins.digitalReadPin(DigitalPin.P8) == 1) basic.pause(1)
    } else
    if (pins.digitalReadPin(DigitalPin.P12) == 1 && ETpad != ETbuttonPad.Ok) {
        ETpad = ETbuttonPad.Ok
        if (buttonpadOkHandler) buttonpadOkHandler()
        while (pins.digitalReadPin(DigitalPin.P12) == 1) basic.pause(1)
    } else
    if (pins.digitalReadPin(DigitalPin.P13) == 1 && ETpad != ETbuttonPad.Up) {
        ETpad = ETbuttonPad.Up
        if (buttonpadUpHandler) buttonpadUpHandler()
        while (pins.digitalReadPin(DigitalPin.P13) == 1) basic.pause(1)
    } else
    if (pins.digitalReadPin(DigitalPin.P16) == 1 && ETpad != ETbuttonPad.Left) {
        ETpad = ETbuttonPad.Left
        if (buttonpadLeftHandler) buttonpadLeftHandler()
        while (pins.digitalReadPin(DigitalPin.P16) == 1) basic.pause(1)
    } else
    if (pins.digitalReadPin(DigitalPin.P15) == 1 && ETpad != ETbuttonPad.Down) {
        ETpad = ETbuttonPad.Down
        if (buttonpadDownHandler) buttonpadDownHandler()
        while (pins.digitalReadPin(DigitalPin.P15) == 1) basic.pause(1)
    } else
    if (pins.digitalReadPin(DigitalPin.P14) == 1 && ETpad != ETbuttonPad.Right) {
        ETpad = ETbuttonPad.Right
        if (buttonpadRightHandler) buttonpadRightHandler()
        while (pins.digitalReadPin(DigitalPin.P14) == 1) basic.pause(1)
    } else {
        if (ETpad != ETbuttonPad.None) {
            ETpad = ETbuttonPad.None
            if (buttonpadNoneHandler) buttonpadNoneHandler()
        }
    }
})

//% color="#C4C80E" icon="\uf05b"
//% block="Buttonpad"
//% block.loc.nl="Buttonpad"
namespace ButtonPad {

    //% block="when %button is pressed"
    //% block.loc.nl="wanneer %button wordt ingedrukt"
    export function onButton(button: ETbuttonPad, code: () => void): void {
        switch (button) {
            case ETbuttonPad.None: buttonpadNoneHandler = code; break;
            case ETbuttonPad.TopLeft: buttonpadTopLeftHandler = code; break;
            case ETbuttonPad.TopRight: buttonpadTopRightHandler = code; break;
            case ETbuttonPad.Ok: buttonpadOkHandler = code; break;
            case ETbuttonPad.Up: buttonpadUpHandler = code; break;
            case ETbuttonPad.Left: buttonpadLeftHandler = code; break;
            case ETbuttonPad.Down: buttonpadDownHandler = code; break;
            case ETbuttonPad.Right: buttonpadRightHandler = code; break;
        }
    }
}

/////////////////
// END INCLUDE //
/////////////////

/////////////////
//  INCLUDE    //
//  etgame.ts  //
/////////////////

type poshandler = (x: number, y: number) => void

enum SpriteDir {
    //% block="up"
    //% block.loc.nl="omhoog"
    Up,
    //% block="down"
    //% block.loc.nl="omlaag"
    Down,
    //% block="to the left"
    //% block.loc.nl="naar links"
    Left,
    //% block="to the right"
    //% block.loc.nl="naar rechts"
    Right
}

enum Visible {
    //% block="shown"
    //% block.loc.nl="wel zien"
    Yes,
    //% block="hidden"
    //% block.loc.nl="niet zien"
    No
}

let ETplay = false
let ETscore = 0

let gameStartHandler: handler
let gamePlayHandler: handler
let gameOverHandler: handler

Game.init()

basic.forever(function () {
    if (!ETplay) return
    if (gamePlayHandler) gamePlayHandler()
})

namespace Game {

    export class Sprite {

        draw: poshandler
        undraw: poshandler
        inField = true
        xpos = 0
        xsiz = 0
        ypos = 0
        ysiz = 0
        dir = SpriteDir.Up
        xmin = 0
        ymin = 0
        xmax = 4
        ymax = 4

        constructor(xsize: number, ysize: number,
            drawSprite: poshandler, undrawSprite: poshandler) {
            this.draw = drawSprite
            this.undraw = undrawSprite
            this.xsiz = xsize
            this.ysiz = ysize
        }

        clipField(xmin: number, ymin: number, xmax: number, ymax: number) {
            this.xmin = xmin
            this.ymin = ymin
            this.xmax = xmax
            this.ymax = ymax
        }

        keepInField(infield: boolean) {
            this.inField = infield
        }

        x(): number {
            return this.xpos + Math.floor(this.xsiz / 2)
        }

        y(): number {
            return this.ypos + Math.floor(this.ysiz / 2)
        }

        sizeX(): number {
            return this.xsiz
        }

        sizeY(): number {
            return this.ysiz
        }

        direction(): SpriteDir {
            return this.dir
        }

        setDirection(direction: SpriteDir) {
            this.dir = direction
        }

        moveTo(x: number, y: number) {
            if (this.undraw)
                this.undraw(this.xpos, this.ypos)
            this.xpos = x - Math.floor(this.xsiz / 2)
            this.ypos = y - Math.floor(this.ysiz / 2)
            if (this.inField) {
                if (this.xpos < this.xmin) this.xpos = this.xmin
                if (this.ypos < this.ymin) this.ypos = this.ymin
                if (this.xpos > this.xmax) this.xpos = this.xmax
                if (this.ypos > this.ymax) this.ypos = this.ymax
            }
            if (this.draw)
                this.draw(this.xpos, this.ypos)
        }

        moveDir(steps: number) {
            switch (this.dir) {
                case SpriteDir.Up: this.moveTo(this.xpos, this.ypos - 1); break
                case SpriteDir.Down: this.moveTo(this.xpos, this.ypos + 1); break
                case SpriteDir.Left: this.moveTo(this.xpos - 1, this.ypos); break
                case SpriteDir.Right: this.moveTo(this.xpos + 1, this.ypos); break
            }
        }

        moveRel(x: number, y: number) {
            this.moveTo(this.xpos + x, this.ypos + y)
        }

        moveRand() {
            let x = etbasic.randomInt(0, 4)
            let y = etbasic.randomInt(0, 4)
            this.moveTo(x, y)
        }

        show(doshow: boolean) {
            if (doshow) {
                if (this.draw)
                    this.draw(this.xpos, this.ypos)
            }
            else {
                if (this.undraw)
                    this.undraw(this.xpos, this.ypos)
            }
        }
    }

    export function createSprite(id: string, xsize: number, ysize: number,
        drawSprite: poshandler, undrawSprite: poshandler): Sprite {
        let sprite = new Sprite(xsize, ysize, drawSprite, undrawSprite)
        sprite.clipField(0, 0, fieldWidth - 1, fieldHeight - 1)
        sprites.push(sprite)
        ids.push(id)
        return sprite
    }

    let sprites: Sprite[] = []
    let ids: string[] = []
    let fieldWidth = 5
    let fieldHeight = 5

    export function init() {
        ETplay = false
        ETscore = 0
    }

    export function setField(height: number, width: number) {
        fieldHeight = height
        fieldWidth = width
    }

    export function getSprite(id: string): Sprite {
        for (let i = 0; i < sprites.length; i++) {
            if (ids[i] == id) return sprites[i]
        }
        return null
    }

    export function isPlaying(): boolean {
        return ETplay
    }

    export function isCollision(id1: string, id2: string): boolean {
        let s1 = getSprite(id1)
        let s2 = getSprite(id2)
        let xl1 = s1.x() - s1.sizeX() / 2
        let xr1 = s1.x() + s1.sizeX() / 2
        let yl1 = s1.y() - s1.sizeY() / 2
        let yr1 = s1.y() + s1.sizeY() / 2
        let xl2 = s2.x() - s2.sizeX() / 2
        let xr2 = s2.x() + s2.sizeX() / 2
        let yl2 = s2.y() - s2.sizeY() / 2
        let yr2 = s2.y() + s2.sizeY() / 2
        if (xl1 <= xr2 && xl1 >= xl2) {
            if (yl1 <= yr2 && yl1 >= yl2) return true
            if (yl1 <= yl2 && yr1 >= yr2) return true
            if (yl2 <= yr1 && yl2 >= yl1) return true
        }
        if (xl1 <= xl2 && xr1 >= xr2) {
            if (yl1 <= yr2 && yl1 >= yl2) return true
            if (yl1 <= yl2 && yr1 >= yr2) return true
            if (yl2 <= yr1 && yl2 >= yl1) return true
        }
        if (xl2 <= xr1 && xl2 >= xl1) {
            if (yl1 <= yr2 && yl1 >= yl2) return true
            if (yl1 <= yl2 && yr1 >= yr2) return true
            if (yl2 <= yr1 && yl2 >= yl1) return true
        }
        return false
    }

    export function show(id: string, displ: Visible) {
        let sprite = getSprite(id)
        if (sprite) sprite.show(displ == Visible.Yes)
    }

    export function setDirection(id: string, dir: SpriteDir) {
        let sprite = getSprite(id)
        if (!sprite) return
        sprite.setDirection(dir)
    }

    export function moveRandom(id: string) {
        let sprite = getSprite(id)
        if (sprite) sprite.moveRand()
    }

    export function moveSteps(id: string, steps: number) {
        let sprite = getSprite(id)
        if (!sprite) return
        sprite.moveDir(steps)
    }

    export function moveDirection(id: string, steps: number, dir: SpriteDir) {
        let sprite = getSprite(id)
        if (!sprite) return
        sprite.setDirection(dir)
        sprite.moveDir(steps)
    }

    export function moveRelative(id: string, xpos: number, ypos: number) {
        let sprite = getSprite(id)
        if (sprite) sprite.moveTo(xpos, ypos)
    }

    export function moveTo(id: string, xpos: number, ypos: number) {
        let sprite = getSprite(id)
        if (sprite) sprite.moveTo(xpos, ypos)
    }

    export function getScore(): number {
        return ETscore
    }

    export function showScore() {
        basic.clearScreen()
        basic.showNumber(ETscore)
    }

    export function stopGame() {
        ETplay = false
        basic.clearScreen()
        etbasic.wait(0.5) // blocks a possible latest button handling
        basic.showNumber(ETscore)
        etbasic.wait(1)
        basic.showIcon(IconNames.Yes)
    }

    export function startGame() {
        basic.clearScreen()
        if (gameStartHandler) gameStartHandler()
        ETscore = 0
        ETplay = true
    }

    export function onGameOver(code: () => void) {
        gameOverHandler = code
    }
}

/////////////////
// END INCLUDE //
/////////////////

/////////////////
//  MAIN       //
//  make-1.ts  //
/////////////////

let time = 0
let starttime = 0

function plotCat(x: number, y: number) {
    led.plot(x, y)
}

function plotMouse(x: number, y: number) {
    led.plot(x, y)
}

function unplotCat(x: number, y: number) {
    led.unplot(x, y)
}

function unplotMouse(x: number, y: number) {
    led.unplot(x, y)
}

Game.createSprite("cat", 1, 1, plotCat, unplotCat)
Game.createSprite("mouse", 1, 1, plotMouse, unplotMouse)

gameStartHandler = () => {
    time = 0
    starttime = control.millis()
    Game.moveTo("mouse", 0, 0)
    Game.moveTo("cat", 4, 4)
}

gamePlayHandler = () => {
    if (time > control.millis()) return
    let dir = etbasic.randomInt(0, 3)
    switch (dir) {
        case 0: Game.moveDirection("mouse", 1, SpriteDir.Up); break
        case 1: Game.moveDirection("mouse", 1, SpriteDir.Down); break
        case 2: Game.moveDirection("mouse", 1, SpriteDir.Left); break
        case 3: Game.moveDirection("mouse", 1, SpriteDir.Right); break
    }
    time = control.millis() + 100
}

function calcScore() {
    ETscore = Math.round((10000 + starttime - control.millis()) / 1000)
    if (ETscore < 0) ETscore = 0
    ETscore = 10 - ETscore
}

ButtonPad.onButton(ETbuttonPad.Up, function () {
    if (!Game.isPlaying()) return
    Game.moveDirection("cat", 1, SpriteDir.Up)
    if (Game.isCollision("cat", "mouse")) {
        calcScore()
        Game.stopGame()
        return
    }
})

ButtonPad.onButton(ETbuttonPad.Down, function () {
    if (!Game.isPlaying()) return
    Game.moveDirection("cat", 1, SpriteDir.Down)
    if (Game.isCollision("cat", "mouse")) {
        calcScore()
        Game.stopGame()
        return
    }
})

ButtonPad.onButton(ETbuttonPad.Left, function () {
    if (!Game.isPlaying()) return
    Game.moveDirection("cat", 1, SpriteDir.Left)
    if (Game.isCollision("cat", "mouse")) {
        calcScore()
        Game.stopGame()
        return
    }
})

ButtonPad.onButton(ETbuttonPad.Right, function () {
    if (!Game.isPlaying()) return
    Game.moveDirection("cat", 1, SpriteDir.Right)
    if (Game.isCollision("cat", "mouse")) {
        calcScore()
        Game.stopGame()
        return
    }
})

ButtonPad.onButton(ETbuttonPad.TopLeft, function () {
    ETscore = 0
    Game.stopGame()
})

ButtonPad.onButton(ETbuttonPad.TopRight, function () {
    ETscore = 0
    Game.stopGame()
})

//% color="#00CC00" icon="\uf1f9"
//% block="Cat and Mouse"
//% block.loc.nl="Kat en Muis"
namespace CatAndMouse {
    //% block="start the game"
    //% block.loc.nl="start het spel"
    export function start() {
        Game.startGame()
    }
}

basic.showIcon(IconNames.Yes)

//////////////
// END MAIN //
//////////////
