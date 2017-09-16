const app = "I don't do much."

function bumpCounter() {
  var counter = 0;

  function addBump() {
    counter++;
  }

  function getBumps() {
    return counter;
  }

  return {
    addBump,
    getBumps
  };
}

function createAnimal(animalType) {


  return (deadlyDevice) => {
    return {
      animalType: animalType,
      deadlyDevice: deadlyDevice
    };
  };

}

var sharkCreator = createAnimal("Shark");
var sharkWithFrickinLaserbeam = createAnimal("Shark")("Laserbeam");
var sharkWithFrickinCannon = createAnimal("Shark")("Cannon");
