import { Component } from '@angular/core';

export interface IWinner {
  player: number,
  date: Date;
}

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent {
  player !: number;
  gameStatus !: 'win' | 'tie' | 'play';
  playerWinner !: number;
  board !: number[];
  showScoreBoard = false;
  winnersBoard: IWinner[] = [];

  constructor(){
    this.newGame();
  }

  newGame(){
    this.player = 1;
    this.gameStatus = 'play';
    this.playerWinner = 0;
    this.board = [0,0,0,0,0,0,0,0,0];
  }

  selectedCell(cellIndex: number, player: number){
    if(this.gameStatus != 'play'){
      return;
    }
    if(this.board[cellIndex] != 0){
      return;
    }
    this.board[cellIndex] = player;
    this.player = player === 1 ? 2 : 1;

    this.checkGameStatus();
  }

  checkGameStatus(){
    for(let i = 0; i < 9; i += 3){
      //filas
      if(this.board[i] != 0
        && this.board[i] === this.board[i+1]
        && this.board[i+1] === this.board[i+2]){
        this.setWinner(this.board[i]);
        return;
      }
      //columnas
      if(this.board[i] != 0
        && this.board[i] === this.board[i+3]
        && this.board[i+3] === this.board[i+6]){
        this.setWinner(this.board[i]);
        return;
      }
      //diagonal
      if(this.board[2] != 0
        && this.board[2] === this.board[4]
        && this.board[4] === this.board[6]){
        this.setWinner(this.board[2]);
        return;
      }
      if(this.board[1] != 0
        && this.board[1] === this.board[5]
        && this.board[5] === this.board[9]){
        this.setWinner(this.board[2]);
        return;
      }
      // empate
      if(this.board.indexOf(0) === -1){
        this.setTie();
        return;
      }

    }
  }

  setTie(){
    this.gameStatus = 'tie';
  }

  setWinner(player:number){
    this.gameStatus = 'win';
    this.playerWinner = player;
    //Storage
    this.saveWinner();
  }

  saveWinner(){
    const winner : IWinner = {
      player: this.playerWinner,
      date: new Date()
    };
    this.winnersBoard.push(winner);
    localStorage.setItem('winners', JSON.stringify(this.winnersBoard));
  }
  loadWinner(){
    const winners = localStorage.getItem('winners');
    if(winners){
      this.winnersBoard = JSON.parse(winners)
    }
  }

}
