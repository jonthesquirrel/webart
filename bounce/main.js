const randomInRange = (min, max) => Math.round(Math.random() * (max - min) + min)

let squareList = []

const createSquareList = () => {
    console.log(document.querySelectorAll(".square"))
    for (const element of document.querySelectorAll(".square")) {
        squareList.push({
            element: element,
            positionX: 0,
            positionY: 0,
            directionX: "positive",
            directionY: "negative",
            speed: 10
        })
    }
}

const setSquarePosition = (square, positionX, positionY) => {
    square.element.style.transform = `translateX(${positionX}px) translateY(${positionY}px)`
    square.positionX = positionX
    square.positionY = positionY
}

const getViewportWidth = () => document.documentElement.clientWidth
const getViewportHeight = () => document.documentElement.clientHeight

const randomlyPositionAllSquares = () => {
    for (const square of squareList) {
        let randomX = randomInRange(0, getViewportWidth())
        let randomY = randomInRange(0, getViewportHeight())
        setSquarePosition(square, randomX, randomY)
    }
}

const setSquareVisible = (element) => {
    element.style.visibility = "visible"
}

const makeAllSquaresVisible = () => {
    for (const square of squareList) {
        setSquareVisible(square.element)
    }
}

const reverseSquareDirectionIfOutsideViewport = (square) => {
    if (square.positionX > getViewportWidth()) {
        square.directionX = "negative"
    }
    if (square.positionX < 0) {
        square.directionX = "positive"
    }
    if (square.positionY > getViewportHeight()) {
        square.directionY = "negative"
    }
    if (square.positionY < 0) {
        square.directionY = "positive"
    }
}

const autoMoveSquare = (square) => {
    reverseSquareDirectionIfOutsideViewport(square)
    let newPositionX
    let newPositionY
    if (square.directionX == "positive") {
        newPositionX = square.positionX + square.speed
    }
    if (square.directionX == "negative") {
        newPositionX = square.positionX - square.speed
    }
    if (square.directionY == "positive") {
        newPositionY = square.positionY + square.speed
    }
    if (square.directionY == "negative") {
        newPositionY = square.positionY - square.speed
    }

    setSquarePosition(square, newPositionX, newPositionY)
}

const autoMoveAllSquares = () => {
    for (const square of squareList) {
        autoMoveSquare(square)
    }
}

const animateSquares = () => {
    autoMoveAllSquares()
    requestAnimationFrame(animateSquares)
}

const startApp = () => {
    createSquareList()
    randomlyPositionAllSquares()
    makeAllSquaresVisible()
    animateSquares()
}

window.addEventListener("load", startApp)