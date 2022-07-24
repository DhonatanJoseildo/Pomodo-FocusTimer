import Sounds from "./sounds.js";

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonAdd = document.querySelector('.addition')
const buttonDecrease = document.querySelector('.decrease')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeeShop = document.querySelector('.coffeeShop')
const buttonFireplace = document.querySelector('.fireplace')

const buttonbgColorLight = document.querySelector('.lightDay')
const buttonbgColorDark = document.querySelector('.night')
const bgBody = document.querySelector('body')

const volForest = document.getElementById('forest')
const volRain = document.getElementById('rain')
const volCoffee = document.getElementById('coffee')
const volFire = document.getElementById('fire')

let timerTimeOut;
let minutes = Number(minutesDisplay.textContent)

const sounds = Sounds()

function countDown() {
  timerTimeOut = setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    
    if (minutes <= 0 && seconds <= 0) {
      
      return
    }

    if (seconds <= 0) {
      seconds = 60
      minutes--
    }
    
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')

    countDown()
  }, 1000);

}

function updateDisplay(newMinutes, seconds) {
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  
  minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function resetTimer() {
  clearTimeout(timerTimeOut)
  updateDisplay(minutes, 0)
}

function addTimer() {
  minutes = minutes + 5
  if (minutes > 90) {
    minutes = 0
  }
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
}

function decreaseTimer() {
  minutes = minutes - 5
  if (minutes < 0) {
    minutes = 0
  }
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
}

buttonPlay.addEventListener('click', () => {
  countDown()
})

buttonStop.addEventListener('click', () => {
  resetTimer()
})

buttonAdd.addEventListener('click', () => {
  addTimer()
})

buttonDecrease.addEventListener('click', () => {
  decreaseTimer()
})

buttonForest.addEventListener('click', () => {
  buttonForest.classList.toggle('check')
  buttonRain.classList.remove('check')
  buttonCoffeeShop.classList.remove('check')
  buttonFireplace.classList.remove('check')

  if (buttonForest.classList.contains('check')) {
    if (volForest.value == 1) {
      volForest.value = 50
    }
    sounds.audioForest(volForest)
  }else{
    sounds.bgAudioForest.pause()
  }

})

buttonRain.addEventListener('click', () => {
  buttonRain.classList.toggle('check')
  buttonForest.classList.remove('check')
  buttonCoffeeShop.classList.remove('check')
  buttonFireplace.classList.remove('check')

  if (buttonRain.classList.contains('check')) {
    sounds.audioRain(volRain)
  }else{
    sounds.bgAudioRain.pause()
  }
})
buttonCoffeeShop.addEventListener('click', () => {
  buttonCoffeeShop.classList.toggle('check')
  buttonForest.classList.remove('check')
  buttonRain.classList.remove('check')
  buttonFireplace.classList.remove('check')

  if (buttonCoffeeShop.classList.contains('check')) {
    sounds.audioCoffee(volCoffee)
  }else{
    sounds.bgAudioCoffeeShop.pause()
  }
})
buttonFireplace.addEventListener('click', () => {
  buttonFireplace.classList.toggle('check')
  buttonForest.classList.remove('check')
  buttonRain.classList.remove('check')
  buttonCoffeeShop.classList.remove('check')

  if (buttonFireplace.classList.contains('check')) {
    sounds.audioFire(volFire)
  }else{
    sounds.bgAudioFireplace.pause()
  }
})

buttonbgColorLight.addEventListener('click', () => {
  buttonbgColorLight.classList.add('hide')
  buttonbgColorDark.classList.remove('hide')
  bgBody.classList.add('dark-mode')
})

buttonbgColorDark.addEventListener('click', () => {
  buttonbgColorLight.classList.remove('hide')
  buttonbgColorDark.classList.add('hide')
  bgBody.classList.remove('dark-mode')
})