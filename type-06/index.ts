type Point = {
    x: number
    y: number
}

function printCoord(points: Point) {
    console.log(`O eixo X é ${points.x} e o eixo Y é ${points.y}`)
}

printCoord({x: 101, y: 50})
