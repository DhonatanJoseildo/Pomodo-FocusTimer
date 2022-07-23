
export default function(){
  
  const bgAudioForest = new Audio('../audio/Floresta.wav')
  const bgAudioRain = new Audio('../audio/Chuva.wav')
  const bgAudioCoffeeShop = new Audio('../audio/Cafeteria.wav')
  const bgAudioFireplace = new Audio('../audio/Lareira.wav')

  function audioForest() {
    bgAudioForest.play()
    bgAudioRain.pause()
    bgAudioCoffeeShop.pause()
    bgAudioFireplace.pause()
  }
  function audioRain() {
    bgAudioRain.play()
    bgAudioForest.pause()
    bgAudioCoffeeShop.pause()
    bgAudioFireplace.pause()
  }
  function audioCoffee() {
    bgAudioCoffeeShop.play()
    bgAudioForest.pause()
    bgAudioRain.pause()
    bgAudioFireplace.pause()
  }
  function audioFire() {
    bgAudioFireplace.play()
    bgAudioForest.pause()
    bgAudioRain.pause()
    bgAudioCoffeeShop.pause()
  }
  return {
    audioForest,
    audioRain,
    audioCoffee,
    audioFire
  }
}

