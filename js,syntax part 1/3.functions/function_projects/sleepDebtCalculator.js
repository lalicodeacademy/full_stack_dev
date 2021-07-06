function getSleepHours(day){
    switch(day.toLowerCase()){
      case 'monday':
        return 8
        break
      case 'tuesday':
        return 7
        break
      case 'wednesday':
      return 9
      break
      case 'thursday':
      return 8
      break
      case 'friday':
      return 7
      break
      case 'saturday':
      return 8
      break
      case 'sunday':
      return 6
      break
      default:
      return 'thats not a day'
      break
    }
  }
  const getActualSleepHours=()=>getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday')
  
  
  const getIdealSleepHours=()=>{
    const idealHours=8*7
    return idealHours
  }
  
  
  const calculateSleepDebt=function(){
    const actualSleepHour=getActualSleepHours()
    const idealSleepHours=getIdealSleepHours()
    if(actualSleepHour>idealSleepHours){
      console.log(`The user got more sleep than needed ${actualSleepHour-idealSleepHours}`)
    }
    else if(actualSleepHour===idealSleepHours){
      console.log('The user got ideal sleep hours')
    }
    else if(actualSleepHour<idealSleepHours){
      console.log(`The user should get some rest ${idealSleepHours-actualSleepHour}`)
  
    }
  }
  
  calculateSleepDebt()