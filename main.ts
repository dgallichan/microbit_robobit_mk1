radio.onReceivedValueDeprecated(function (name, value) {
    if (name == "Turn") {
        RawRoll = value
        MappedRoll = pins.map(
        RawRoll,
        -90,
        90,
        -100,
        100
        )
        RollLeft = MappedRoll
        RollRight = -1 * MappedRoll
    }
    if (name == "Drive") {
        RawPitch = value
        MappedPitch = pins.map(
        RawPitch,
        -90,
        90,
        -100,
        100
        )
        PitchLeft = MappedPitch
        PitchRight = MappedPitch
    }
    LeftOutput = (PitchLeft + RollLeft) / 2
    RightOutput = (PitchRight + RollRight) / 2
    if (RawPitch == 0 && RawRoll == 0) {
        robobit.stop(RBStopMode.Coast)
    } else {
        if (LeftOutput > 0) {
            robobit.move(RBMotor.Left, RBDirection.Forward, topSpeedAnalogue * LeftOutput)
        } else {
            robobit.move(RBMotor.Left, RBDirection.Reverse, topSpeedAnalogue * (-1 * LeftOutput))
        }
        if (RightOutput > 0) {
            robobit.move(RBMotor.Right, RBDirection.Forward, topSpeedAnalogue * RightOutput)
        } else {
            robobit.move(RBMotor.Right, RBDirection.Reverse, topSpeedAnalogue * (-1 * RightOutput))
        }
    }
    if (name == "Go") {
        if (value >= 0) {
            robobit.goms(RBDirection.Forward, topSpeed * 100, value)
        } else {
            robobit.goms(RBDirection.Reverse, topSpeed * 100, -1 * value)
        }
    }
    if (name == "Rotate") {
        if (value >= 0) {
            robobit.rotatems(RBRobotDirection.Right, topSpeed * 100, value)
        } else {
            robobit.rotatems(RBRobotDirection.Left, topSpeed * 100, -1 * value)
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
let topSpeedAnalogue = 0
let topSpeed = 0
radio.setGroup(1)
topSpeed = 0.5
topSpeedAnalogue = 1
robobit.select_model(RBModel.Mk1)
basic.showLeds(`
    # . # . #
    . # . # .
    . . # . .
    # # . # #
    # # # # #
    `)
basic.forever(function () {
	
})
basic.forever(function () {
    basic.pause(100)
})
