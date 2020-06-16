input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
    serial.writeNumbers([input.acceleration(Dimension.X), input.acceleration(Dimension.Y), input.acceleration(Dimension.Z)])
    serial.writeValue("x", input.acceleration(Dimension.X))
    serial.writeValue("a.x", input.acceleration(Dimension.X))
    serial.writeValue("a.y", input.acceleration(Dimension.Y))
})
