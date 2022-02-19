const randomInRange = (min, max) => Math.round(Math.random() * (max - min) + min)

let squareList = []

const createSquareList = () => {
    for (element of document.querySelectorAll(".square")) {
        squareList.push({
            element: element,
            positionX: 0,
            positionY: 0,
            directionX: "positive",
            directionY: "negative",
            speed: "1"
        })
    }
}

const animateSquares = () => {
    autoMoveAllSquares()
    requestAnimationFrame(animateSquares)
}

const setSquarePosition = (square, positionX, positionY) => {
    square.element.style.transform = `translateX(${positionX}px) translateY(${positionY}px)`
    square.positionX = positionX
    square.positionY = positionY
}

const randomlyPositionAllSquares = () => {
    for (square of squareList) {
        let randomX = randomInRange(0, document.documentElement.clientWidth)
        let randomY = randomInRange(0, document.documentElement.clientHeight)
        setSquarePosition(square, randomX, randomY)
    }
}

const setSquareVisible = (element) => {
    element.style.visibility = "visible"
}

const makeAllSquaresVisible = () => {
    for (square of squareList) {
        setSquareVisible(square.element)
    }
}

const autoMoveAllSquares = () => {

}

const startApp = () => {
    createSquareList()
    randomlyPositionAllSquares()
    makeAllSquaresVisible()
    requestAnimationFrame(animateSquares)
}

window.addEventListener("load", startApp)