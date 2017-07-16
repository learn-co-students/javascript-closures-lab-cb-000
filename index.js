const app = "I don't do much."


function bumpCounter () {
  var counter = 0;
  var addBump =  function () {counter ++};
  var getBumps = function () {return counter};
  return {addBump,getBumps};
}
function createAnimal(animalType) {
  return function (deadlyDevice) {
    return {
      deadlyDevice,
      animalType
    }
  }
}

var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam = sharkCreator ('Laserbeam');
var sharkWithFrickinCannon = sharkCreator ('Cannon');
