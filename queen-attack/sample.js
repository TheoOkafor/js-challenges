export class QueenAttack {
  constructor(queens) {
    if(queens == undefined){
      this.white = [0, 3];
      this.black = [7, 3];
    }else{
        this.white = queens.white;
      this.black = queens.black;
    }
    let samePosition = true;
    for (var i = 0, len = this.white.length; i < len; i++){
        if (this.white[i] !== this.black[i]){
            return false;
        }
    }
    if(samePosition){
      throw new Error('Queens cannot share the same space');
    }
  }

  toString() {
      let arrayLevel = 8;
      let arrayBoard = [];
      let stringBoard = '';
      let breakLine = '';
      for(let i = 0; i < arrayLevel; i++){
        if(i < 8){
      breakLine = '\n'
        }
        let newRowboard = [['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_'], ['_']];;
        if(this.white[0] == i){
          newRowboard[this.white[1]] = ['W'];
        }
        if(this.black[0] == i){
          newRowboard[this.black[1]] = ['B'];
        }
        arrayBoard.push(newRowboard);
        stringBoard += arrayBoard[i].join(' ') + breakLine;
      }
      return stringBoard;
  }

  canAttack() {
      let canAttack = true;
      if(this.white[0] == this.black[0] || this.white[1] == this.black[1]){
          return canAttack;
      }else if(Math.abs((this.white[1] - this.white[0])) == Math.abs((this.black[1] - this.black[0]))){
          return canAttack;
      }else if((this.white[1] + this.white[0]) == (this.black[1] + this.black[0])){
          return canAttack;
      }
      return false;
  }
}