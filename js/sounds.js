
export default function(){
  
  const bgAudioForest = new Audio('../audio/Floresta.wav')
  const bgAudioRain = new Audio('../audio/Chuva.wav')
  const bgAudioCoffeeShop = new Audio('../audio/Cafeteria.wav')
  const bgAudioFireplace = new Audio('../audio/Lareira.wav')

  bgAudioForest.loop = true
  bgAudioRain.loop = true
  bgAudioCoffeeShop.loop = true
  bgAudioFireplace.loop = true

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
    bgAudioFireplace
  }
}

