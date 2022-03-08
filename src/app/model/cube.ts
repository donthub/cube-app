export interface Cube {
    size: number;
    sides: Side[];
}

export interface Side {
    index: number;
    squares: Square[]
}

export interface Square {
    index: number;
    value: number;
}

export class CubeFactory {

    create(size: number = 3): Cube {
        let cube: Cube = {
            size: 3,
            sides: []
        };

        let index = 0;
        for (let i = 0; i < 6; i++) {
            let side: Side = {
                index: i + 1,
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

    copy(otherCube: Cube): Cube {
        let cube: Cube = {
            size: otherCube.size,
            sides: []
        };

        for (let otherSide of otherCube.sides) {
            let side: Side = {
                index: otherSide.index,
                squares: []
            };

            for (let otherSquare of otherSide.squares) {
                let square: Square = {
                    index: otherSquare.index,
                    value: otherSquare.value
                };
                side.squares.push(square);
            }
            cube.sides.push(side);
        }

        return cube;
    }

    parse(value: string): Cube {
        let size = Math.sqrt(value.length / 6)
        if (Math.round(size) != size) {
            return this.create();
        }
        let cube: Cube = this.create(size);
        let index = 0;
        for (const side of cube.sides) {
            for (const square of side.squares) {
                square.value = Number(value[index++]);
            }
        }
        return cube;
    }

    print(cube: Cube): string {
        let str = '';
        if (!cube) {
        return str;
        }

        for (const side of cube.sides) {
            for (const square of side.squares) {
                str += square.value
            }
        }
        return str;
    }

}