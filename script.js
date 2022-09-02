var isCross = true

const EMPTY = "empty"
const CROSS = "cross"
const CIRCLE = "circle"

function testFunction(button) {
    var a = button.value

    if (a == EMPTY && isCross) {
        isCross = false
        var setButton = document.getElementById(button)
        setButton.nodeValue = CROSS
        setButton.textContent = "X"
    } else {
        isCross = true
        var setButton = document.getElementById(button)
        setButton.nodeValue = CIRCLE
        setButton.textContent = "O"
    }

    alert("ola marilene, a noite tainha, e muito ... "+a)
}