import Events from "./events.js";
import Sounds from "./sounds.js";
import { Elements } from "./elements.js";
import { Controls } from "./controls.js";
import { Timer } from "./timer.js";

const {
  buttonPlay,
  buttonPause,
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

// butão de controles te tempo
buttonPlay.addEventListener('click', () => {
  sounds.pressAudio()
  controls.playTimer()
  timer.countDown()
})

buttonPause.addEventListener('click', () => {
  sounds.pressAudio()
  controls.reset()
  timer.hold()
})

buttonStop.addEventListener('click', () => {
  sounds.pressAudio()
  timer.resetTimer()
  controls.reset()
})

buttonAdd.addEventListener('click', () => {
  sounds.pressAudio()
  timer.addTimer()
})

buttonDecrease.addEventListener('click', () => {
  sounds.pressAudio()
  timer.decreaseTimer()
})


// butão controle de audio / fundo musical
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


// butão de controle tema (background) light / dark 
buttonbgColorLight.addEventListener('click', () => {
  controls.bgLight()
})

buttonbgColorDark.addEventListener('click', () => {
  controls.bgDark()
})