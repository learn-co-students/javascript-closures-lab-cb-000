function bumpCounter(){
  var counter = 0;

  function addBump(){
    counter +=1
  }

  function getBumps(){
    return counter
  }

  return{
    addBump, getBumps
  }
}

function createAnimal(animalType){
  function animalCreated(deadlyDevice){
    return {
      animalType,deadlyDevice
    }
  }

  return animalCreated
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = createAnimal('Shark')('Laserbeam')
var sharkWithFrickinCannon = createAnimal('Shark')('Cannon')
