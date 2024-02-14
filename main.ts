input.onButtonPressed(Button.A, function () {
    A += 1
    basic.showNumber(A)
})
input.onButtonPressed(Button.AB, function () {
    plus += A + B
    basic.showNumber(plus)
})
input.onButtonPressed(Button.B, function () {
    B += 1
    basic.showNumber(B)
})
let B = 0
let A = 0
let plus = 0
basic.showNumber(0)
plus = 0
A = 0
B = 0
basic.forever(function () {
	
})
