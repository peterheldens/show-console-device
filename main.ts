basic.forever(function () {
    serial.writeNumbers([input.acceleration(Dimension.X), input.acceleration(Dimension.Y), input.acceleration(Dimension.Z)])
    serial.writeValue("a.x", input.acceleration(Dimension.X))
    serial.writeValue("a.y", input.acceleration(Dimension.Y))
    serial.writeValue("x", input.acceleration(Dimension.X))
})
