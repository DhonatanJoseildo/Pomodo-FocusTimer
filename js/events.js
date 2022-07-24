import { Elements } from "./elements.js";

const {
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,
  volForest,
  volRain,
  volCoffee,
  volFire
} = Elements

export default function() {

  function validationVolForest(sounds) {
    if (buttonForest.classList.contains('check')) {
      if (volForest.value == 1) {
        volForest.value = 50
      }
      sounds.audioForest(volForest)
    }else{
      sounds.bgAudioForest.pause()
    }
  }
  
  function validationVolRain(sounds) {
    if (buttonRain.classList.contains('check')) {
      if (volRain.value == 1) {
        volRain.value = 50
      }
      sounds.audioRain(volRain)
    }else{
      sounds.bgAudioRain.pause()
    }
  }
  
  function validationVolCoffee(sounds) {
    if (buttonCoffeeShop.classList.contains('check')) {
      if (volCoffee.value == 1) {
        volCoffee.value = 50
      }
      sounds.audioCoffee(volCoffee)
    }else{
      sounds.bgAudioCoffeeShop.pause()
    }
  }
  
  function validationVolFire(sounds) {
    if (buttonFireplace.classList.contains('check')) {
      if (volFire.value == 1) {
        volFire.value = 50
      }
      sounds.audioFire(volFire)
    }else{
      sounds.bgAudioFireplace.pause()
    }
  }

  return {
    validationVolForest,
    validationVolRain,
    validationVolCoffee,
    validationVolFire
  }
}
