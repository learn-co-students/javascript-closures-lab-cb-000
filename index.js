const app = "I don't do much."
function bumpCounter() {
  var counter = 0 ;
  function addBump() {
    counter += 1
  }
  function getBumps() {
    return counter
  }
  return {addBump, getBumps}
}
/* var {addBump, getBumps} =   bumpCounter() */
function createAnimal(animalType) {
  function combine(deadlyDevice) {
    return{'animalType': animalType, 'deadlyDevice': deadlyDevice}
  }
  return combine
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator('Cannon')
