const app = "I don't do much."

function bumpCounter() {
  var bumps = 0
  function addBump() { bumps += 1; }
  function getBumps() { return bumps }

  return {addBump, getBumps}
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
