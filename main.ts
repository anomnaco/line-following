let sensor_R = 0
let sensor_M = 0
let sensor_L = 0
motobit.enable(MotorPower.On)
let threshold = 750
let delay = 50
basic.forever(function () {
    sensor_L = pins.analogReadPin(AnalogPin.P0)
    sensor_M = pins.analogReadPin(AnalogPin.P1)
    sensor_R = pins.analogReadPin(AnalogPin.P2)
    if (sensor_M >= threshold) {
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
    } else if (sensor_L >= threshold) {
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 75)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
    } else if (sensor_R >= threshold) {
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 75)
    } else {
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 50)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
    }
    basic.pause(delay)
})
