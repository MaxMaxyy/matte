input.onButtonPressed(Button.A, function () {
    if (_switch == 0) {
        number1 += 1
        basic.showNumber(number1)
    }
    if (_switch == 1) {
        number2 += 1
        basic.showNumber(number2)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    _switch += 0
    if (_switch == 2) {
        basic.showNumber(number1 + number2)
    }
})
let _switch = 0
let number2 = 0
let number1 = 0
number1 = 0
number2 = 0
_switch = 0
