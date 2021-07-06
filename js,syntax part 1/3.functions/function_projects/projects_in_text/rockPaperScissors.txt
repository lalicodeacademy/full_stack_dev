const getUserChoice=(userInput)=>{
    userInput=userInput.toLowerCase()
    if(userInput==='rock' || userInput==='paper' || userInput==="scissors" ||userInput==='bomb'){
      return userInput
    }else{
      console.log('error')
    }
  }
  const getComputerChoice=()=>{
    let value=Math.floor(Math.random(0,2)*3)
    switch(value){
      case 0:
        return 'rock'
        break
      case 1:
        return 'paper'
        break
      case 2:
        return 'scissors'
        break
    }
  }
  
  function determineWinner(userChoice,computerChoice){
    if(userChoice==="bomb"){
      return 'the user has won with bomb'
    }
    else if (userChoice===computerChoice){
      return 'the game was tie'
    }
    else if(userChoice==='rock'){
      if(computerChoice==='paper'){
        return 'the computer has won'
      }else{
        return 'the user has won'
      }}
      else if(userChoice==='paper'){
      if(computerChoice==='scissors'){
        return 'the computer has won'
      }else{
        return 'the user has won'
      }}
      else if(userChoice==='scissors'){
      if(computerChoice==='rock'){
        return 'the computer has won'
      }else{
        return 'the user has won'
      }
    }
  }
  
  function playGame(userChoice=getUserChoice('bomb'),computerChoice=getComputerChoice()){
    console.log(determineWinner(userChoice,computerChoice))
  }
  playGame()
  