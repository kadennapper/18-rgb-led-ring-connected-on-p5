function doLEDFront () {
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED5, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED6, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED7, 0, 67)
    basic.pause(1000)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED5, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED6, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED7, 100, 67)
    basic.pause(1000)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED5, 0, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED6, 100, 67)
    PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED7, 100, 67)
    basic.pause(1000)
}
function doLightSensor () {
    val = Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, 0, 255)
    strip.showColor(neopixel.rgb(255 - val, 255 - val, 255 - val))
    basic.pause(100)
}
function doLEDStrip () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(500)
}
let strip: neopixel.Strip = null
let val = 0
val = 0
strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
strip.clear()
PCA9685.reset(67)
PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED5, 0, 67)
PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED6, 0, 67)
PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED7, 0, 67)
basic.forever(function () {
	
})
