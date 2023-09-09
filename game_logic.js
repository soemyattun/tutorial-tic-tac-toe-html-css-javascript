let playerText = document.getElementById('playerText')
let restartBtn = document.getElementById('restartBtn')
let boxes = Array.form(document.getElementById('box'))
const O_TEXT = "0"
const X_TEXT = "X"
let current = Array(9).fill(null)

const startGame =() =>{
    boxes.forEach(box => box.addEventListener('click',boxClick))
    }

    function boxClick(e){
        const id = e.target.id

        if(!speaces[id]){
            speace[id] = currentPlayer
            e.target.innerText = currentPlayer

            if(playerHasWon()){
                playerText = ``
            }

            

            if(playerHasWon() !==false){
                playerText = `${currentPlayer} has won!`
                let winning_blocks = playerHasWon()
            }

            currentPlayer = currentPlayer ==X_TEXT?  O_TEXT :X_TEXT
        }
    }

    const winningCombos =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    function playerHasWon(){
        for (const condition of winningCombos){
            let[a,b,c] = condition

            if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
                return [a,b,c]
            }
        }
        return false
    }
    restartBtn.addEventListener('click',restart)

    function restart(){
        speaces.fill(null)

        boxes.forEach( box =>{
            box.innerText = ''
        })

        playerText = "Tic Tac Toe"

        currentPlayer = X_TEXT
    }
startGame()
    