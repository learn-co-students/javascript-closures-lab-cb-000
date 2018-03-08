const app = "I don't do much."

function bumpCounter() {
  var bumps = 0
  function addBump() { bumps += 1; }
  function getBumps() { return bumps }

  return {addBump, getBumps}
}

function createAnimal(animalType) {
  function device(deadlyDevice) {
    return { animalType: animalType, deadlyDevice: deadlyDevice }
  }

  return {device}

}

function sharkCreator() {
  return createAnimal('Shark')
}

var sharkWithFrickinLaserbeam = {animalType: "Shark", deadlyDevice: "Laserbeam"}
var sharkWithFrickinCannon = {animalType: "Shark", deadlyDevice: "Cannon"}
