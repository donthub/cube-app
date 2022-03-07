export interface Cube {
    size: number;
    sides: Side[];
}

export interface Side {
    squares: Square[]
}

export interface Square {
    index: number;
    value: number;
}

export class CubeFactory {

    create(size: number = 3) {
        let cube: Cube = {
            size: 3,
            sides: []
        };
        let index = 0;
        for (let i = 0; i < 6; i++) {
            let side: Side = {
                squares: []
            };

            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                    let square: Square = {
                        index: index++,
                        value: 1
                    };
                    side.squares.push(square);
                }
            }
            cube.sides.push(side);
        }
        return cube;
    }

}