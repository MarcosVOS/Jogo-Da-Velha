

document.addEventListener('DOMContentLoaded',() => {

  let square = document.querySelectorAll('.square');

  square.forEach((square)=>{
    square.addEventListener('click',handleClick)
  })
})

function handleClick(event){

  let square = event.target;
  let position = square.id;

  if(handleMove(position)){

    setTimeout(()=>{
      if(gameOver){
        if(PlayerTime == 0){
          PlayerTime = "🛡"
          alert("O jogo acabou! - O vencedor foi " + PlayerTime)
          let circle = document.getElementById("personO")
          victoryCicle+=1
          circle.innerText = victoryCicle 
        }
        if(PlayerTime == 1){
          PlayerTime = "⚔"
          alert("O jogo acabou! - O vencedor foi " + PlayerTime)
          let circle = document.getElementById("personX")
          victoryX+=1
          circle.innerText = victoryX
        }
      }
      if(gameTie){
        alert("O jogo empatou")
      }
    },20)
    
  }
  updateSquare(position);
}

function updateSquare(position){
  let square = document.getElementById(position.toString());
  let symbol = board[position]
  square.innerHTML = `<div class='${symbol}'></div>`
}

function reStart() {

  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
      let postion = square.id;
      let symbol = board[postion];
      square.innerHTML = ` `
      board = ['','','','','','','','','',];
      gameOver = false
      PlayerTime = 0    
  })

}