export class QueenAttack {
    constructor(position = { white: [0, 3], black: [7, 3] }) {
        this.hasSamePosition = (white, black) => white[0] === black[0] 
            && white[1] === black[1];
        if (this.hasSamePosition(position.white, position.black)) {
            throw new Error('Queens cannot share the same space');
        }
        this.white = position.white;
        this.black = position.black;
    }

    toString() {
        const [xWhite, yWhite] = this.white;
        const [xBlack, yBlack] = this.black;
        const emptyLine = Array(8).fill('_');
        const board = [];
        for (let i = 0; i < 8; i += 1) {
            board.push(emptyLine.slice());
        }
        board[xWhite][yWhite] = "W";
        board[xBlack][yBlack] = "B";
        const result = board.reduce(
        (accum, lineArray) => accum + lineArray.join(' ') + '\n', '');

        return result;
    }

    canAttack() {
        const [xWhite, yWhite] = this.white;
        const [xBlack, yBlack] = this.black;

        const hasDiagonalAttack = Math.abs(xWhite - xBlack) === Math.abs(yWhite - yBlack);
        
        const canAttack = xWhite === xBlack // check the row
            || yWhite === yBlack // check the column
            || hasDiagonalAttack

        return canAttack;
    }
}
