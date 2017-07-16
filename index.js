const app = "I don't do much."

function bumpCounter() {
  var counter = 0;

  function addBump(counter){
    counter += 1;
  }

  function getBumps(counter){
    return counter;
  }

  return {
    addBump,
    bumpCounter
  };
}

function createAnimal(animalType) {

}

var sharkCreator = createAnimal("Shark");
var sharkWithFrickinLaserbeam = createAnimal({ animalType: 'Shark', deadlyDevice: 'Laserbeam' });
var sharkWithFrickinCannon = createAnimal({ animalType: 'Shark', deadlyDevice: 'Cannon' });
