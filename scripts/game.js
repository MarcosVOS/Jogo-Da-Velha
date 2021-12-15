let board = ['','','','','','','','','',];
let PlayerTime = 0;
let symbols = ['O','X']
let gameOver = false

let victoryCicle = 0
let victoryX = 0 

let winState = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

function handleMove(position){

  if(gameOver){
    return;
  }

  if(board[position] == ''){
    board[position] = symbols[PlayerTime];

      gameOver = isWin()
      gameTie = verificaEmpate() 

    if(gameOver == false){
      PlayerTime = (PlayerTime == 0)?1:0;
    }
    
    if(gameOver){
      return true
    }
    if(gameTie){
      return true
    }
    else{
      return false
    }
  }
}

function isWin(){

  for(let i=0;i<winState.length;i++){
   
    let seq = winState[i];
    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];
    

    if(board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] && 
      board[pos1] != ""){
      return true
    }    
  }
  return false
}

function verificaEmpate(){
  let empate = 0
  
  for(let i = 0; i < board.length;i++){
    if(board[i] != ""){
      empate = empate + 1;
      if(empate == 9){
        return true
      } 
    }
  }
  return false
}
