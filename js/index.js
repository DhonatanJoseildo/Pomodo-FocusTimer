import Events from "./events.js";
import Sounds from "./sounds.js";
import { Elements } from "./elements.js";
import { Controls } from "./controls.js";
import { Timer } from "./timer.js";

const {
  buttonPlay,
  buttonStop,
  buttonAdd,
  buttonDecrease,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,
  buttonbgColorLight,
  buttonbgColorDark
} = Elements

const controls = Controls()
const sounds = Sounds()
const timer = Timer()
const events = Events()


buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.toggle('running')
  if (buttonPlay.classList.contains('running')) {
    timer.countDown()
  }else{
    timer.hold()
  }
})

buttonStop.addEventListener('click', () => {
  buttonPlay.classList.remove('running')
  timer.resetTimer()
})

buttonAdd.addEventListener('click', () => {
  timer.addTimer()
})

buttonDecrease.addEventListener('click', () => {
  timer.decreaseTimer()
})

buttonForest.addEventListener('click', () => {
  controls.playForest()
  events.validationVolForest(sounds)
})

buttonRain.addEventListener('click', () => {
  controls.playRain()
  events.validationVolRain(sounds)
})

buttonCoffeeShop.addEventListener('click', () => {
  controls.playCoffee()
  events.validationVolCoffee(sounds)
})

buttonFireplace.addEventListener('click', () => {
  controls.playFire()
  events.validationVolFire(sounds)
})

buttonbgColorLight.addEventListener('click', () => {
  controls.bgLight()
})

buttonbgColorDark.addEventListener('click', () => {
  controls.bgDark()
})