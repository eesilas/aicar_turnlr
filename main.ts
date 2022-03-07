function L () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    n,
    SuperBit.enMotors.M2,
    p
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    p,
    SuperBit.enMotors.M4,
    n
    )
}
function F () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    p,
    SuperBit.enMotors.M2,
    p
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    p,
    SuperBit.enMotors.M4,
    p
    )
}
function B () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    n,
    SuperBit.enMotors.M2,
    n
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    n,
    SuperBit.enMotors.M4,
    n
    )
}
function R () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    p,
    SuperBit.enMotors.M2,
    n
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    n,
    SuperBit.enMotors.M4,
    p
    )
}
let n = 0
let p = 0
basic.showIcon(IconNames.Yes)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.OBJECTCLASSIFICATION)
p = 70
n = -70
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(1, "Turn Left")
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(1000)
        L()
    } else if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(2, "Turn Right")
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        R()
        basic.pause(1000)
    } else {
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        F()
        basic.pause(1000)
    }
})
