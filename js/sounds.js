
export default function(){
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  const bgAudioForest = new Audio("https://github.com/DhonatanJoseildo/Pomodo-FocusTimer/blob/main/audio/Floresta.wav?raw=true")
  const bgAudioRain = new Audio("https://github.com/DhonatanJoseildo/Pomodo-FocusTimer/blob/main/audio/Chuva.wav?raw=true")
  const bgAudioCoffeeShop = new Audio("https://github.com/DhonatanJoseildo/Pomodo-FocusTimer/blob/main/audio/Cafeteria.wav?raw=true")
  const bgAudioFireplace = new Audio("https://github.com/DhonatanJoseildo/Pomodo-FocusTimer/blob/main/audio/Lareira.wav?raw=true")

  bgAudioForest.loop = true
  bgAudioRain.loop = true
  bgAudioCoffeeShop.loop = true
  bgAudioFireplace.loop = true

  function timeEnd() {
    kitchenTimer.play()
  }

  function pressAudio() {
    buttonPressAudio.play()
  }

  function audioForest(vol) {
    bgAudioForest.volume = vol.value / 100
    bgAudioForest.play()
    bgAudioRain.pause()
    bgAudioCoffeeShop.pause()
    bgAudioFireplace.pause()
  }
  function audioRain(vol) {
    bgAudioRain.volume = vol.value / 100
    bgAudioRain.play()
    bgAudioForest.pause()
    bgAudioCoffeeShop.pause()
    bgAudioFireplace.pause()
  }
  function audioCoffee(vol) {
    bgAudioCoffeeShop.volume = vol.value / 100
    bgAudioCoffeeShop.play()
    bgAudioForest.pause()
    bgAudioRain.pause()
    bgAudioFireplace.pause()
  }
  function audioFire(vol) {
    bgAudioFireplace.volume = vol.value / 100
    bgAudioFireplace.play()
    bgAudioForest.pause()
    bgAudioRain.pause()
    bgAudioCoffeeShop.pause()
  }
  return {
    audioForest,
    audioRain,
    audioCoffee,
    audioFire,
    bgAudioForest,
    bgAudioRain,
    bgAudioCoffeeShop,
    bgAudioFireplace,
    pressAudio,
    timeEnd
  }
}

