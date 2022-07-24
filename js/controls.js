import { Elements } from "./elements.js";

const {
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,
  buttonbgColorLight,
  buttonbgColorDark,
  bgBody
} = Elements

export function Controls() {
  function playForest() {
    buttonForest.classList.toggle('check')
    buttonRain.classList.remove('check')
    buttonCoffeeShop.classList.remove('check')
    buttonFireplace.classList.remove('check')
  }
  
  function playRain() {
    buttonRain.classList.toggle('check')
    buttonForest.classList.remove('check')
    buttonCoffeeShop.classList.remove('check')
    buttonFireplace.classList.remove('check')
  }
  
  function playCoffee() {
    buttonCoffeeShop.classList.toggle('check')
    buttonForest.classList.remove('check')
    buttonRain.classList.remove('check')
    buttonFireplace.classList.remove('check')
  }
  
  function playFire() {
    buttonFireplace.classList.toggle('check')
    buttonForest.classList.remove('check')
    buttonRain.classList.remove('check')
    buttonCoffeeShop.classList.remove('check')
  }

  function bgLight() {
    buttonbgColorLight.classList.add('hide')
    buttonbgColorDark.classList.remove('hide')
    bgBody.classList.add('dark-mode')
  }

  function bgDark() {
    buttonbgColorLight.classList.remove('hide')
    buttonbgColorDark.classList.add('hide')
    bgBody.classList.remove('dark-mode')
  }

  return {
    playForest,
    playRain,
    playCoffee,
    playFire,
    bgLight,
    bgDark
  }
}

