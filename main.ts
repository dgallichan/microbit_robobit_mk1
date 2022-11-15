radio.onReceivedValueDeprecated(function (name, value) {
    if (name == "Turn") {
        RawRoll = value
        MappedRoll = pins.map(
        RawRoll,
        -1000,
        1000,
        0,
        100
        )
        RollLeft = MappedRoll
        RollRight = MappedRoll
    }
    if (name == "Drive") {
        RawPitch = value
        MappedPitch = pins.map(
        RawPitch,
        1000,
        -1000,
        0,
        100
        )
        PitchLeft = MappedPitch
        PitchRight = 100 - MappedPitch
    }
    LeftOutput = (PitchLeft + RollLeft) / 2
    RightOutput = (PitchRight + RollRight) / 2
    if (RawPitch == 0 && RawRoll == 0) {
        robobit.stop(RBStopMode.Coast)
    } else {
        if (LeftOutput > 0) {
            robobit.move(RBMotor.Left, RBDirection.Forward, topSpeed * LeftOutput)
        } else {
            robobit.move(RBMotor.Left, RBDirection.Reverse, topSpeed * LeftOutput)
        }
        if (RightOutput > 0) {
            robobit.move(RBMotor.Right, RBDirection.Forward, topSpeed * RightOutput)
        } else {
            robobit.move(RBMotor.Right, RBDirection.Reverse, topSpeed * RightOutput)
        }
    }
})
let RightOutput = 0
let LeftOutput = 0
let PitchRight = 0
let PitchLeft = 0
let MappedPitch = 0
let RawPitch = 0
let RollRight = 0
let RollLeft = 0
let MappedRoll = 0
let RawRoll = 0
let topSpeed = 0
radio.setGroup(1)
topSpeed = 50
robobit.select_model(RBModel.Mk1)
basic.showLeds(`
    # . # . #
    . # . # .
    . . # . .
    . # . # .
    # # # # #
    `)
basic.forever(function () {
	
})
basic.forever(function () {
    basic.pause(100)
})
