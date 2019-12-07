export class QueenAttack {
    constructor(position = { white: [0, 3], black: [7, 3] }) {
        this.hasSamePosition = (white, black) => white[0] === black[0] 
            && white[1] === black[1];
        if (this.hasSamePosition(position.white, position.black)) {
            throw new Error('Queens cannot share the same space');
        }
        this.white = position.white;
        this.black = position.black;
        this.board = ['_ _ _ _ _ _ _ _',
            '_ _ _ _ _ _ _ _',
            '_ _ _ _ _ _ _ _',
            '_ _ _ _ _ _ _ _',
            '_ _ _ _ _ _ _ _',
            '_ _ _ _ _ _ _ _',
            '_ _ _ _ _ _ _ _',
            '_ _ _ _ _ _ _ _\n']
        this.whitesLegalMoves = [];
    }

    toString() {
        const board = this.board.map((row, index) => {
            let newRow = row.split(' ');
            if (index === this.white[0]) {
                newRow[this.white[1]] = 'W';
            }
            if (index === this.black[0]) {
                newRow[this.black[1]] = 'B';
            }
            return newRow.join(' ');
        })
        return board.join('\n');
    }

    getUps(x, y) {
        x -= 1;
        while (x >= 0) {
            this.whitesLegalMoves.push([x, y]);
            x -= 1;
        }
    }
    
    getDowns(x, y) {
        x += 1;
        while (x <= 7) {
            this.whitesLegalMoves.push([x, y]);
            x += 1;
        }
    }
    
    getLefts(x, y) {
        y -= 1;
        while (y >= 0) {
            this.whitesLegalMoves.push([x, y]);
            y -= 1;
        }
    }

    getRights(x, y) {
        y += 1;
        while (y <= 7) {
            this.whitesLegalMoves.push([x, y]);
            y += 1;
        }
    }
    
    getTopLeftDiags(x, y) {
        while (x > 0 && y > 0) {
            x -= 1;
            y -= 1;
            this.whitesLegalMoves.push([x, y]);
        }
    }
    
    getTopRightDiags(x, y) {
        while (x > 0 && y <= 7) {
            x -= 1;
            y += 1;
            this.whitesLegalMoves.push([x, y]);
        }
    }
    
    getBottomLeftDiags(x, y) {
        while (x <= 7 && y > 0) {
            x += 1;
            y -= 1;
            this.whitesLegalMoves.push([x, y]);
        }
    }
    
    getBottomRightDiags(x, y) {
        x += 1;
        y += 1;
        while (x <= 7 && y <= 7) {
            this.whitesLegalMoves.push([x, y]);
            x += 1;
            y += 1;
        }
    }

    canAttack() {
        this.getUps(this.white[0], this.white[1]);
        this.getDowns(this.white[0], this.white[1]);
        this.getLefts(this.white[0], this.white[1]);
        this.getRights(this.white[0], this.white[1]);
        this.getTopLeftDiags(this.white[0], this.white[1])
        this.getTopRightDiags(this.white[0], this.white[1]);
        this.getBottomLeftDiags(this.white[0], this.white[1]);
        this.getBottomRightDiags(this.white[0], this.white[1]);

        const match = this.whitesLegalMoves
            .find(coord => coord[0] === this.black[0] && coord[1] === this.black[1]);
        const result = match ? true : false;
        return result;
    }
}
