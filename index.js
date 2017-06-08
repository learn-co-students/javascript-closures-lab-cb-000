//const app = "I don't do much.";

function bumpCounter(){
  let counter = 0;
   function addBump(){ //adds one to the counter
    counter++;

  }
   function getBumps(){
    return counter;
  }
  return {
    addBump, getBumps,
  };
}

//Dangerous animals
function createAnimal(animalType){
  return function (deadlyDevice){
    return {animalType, deadlyDevice};

  }
}
var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam = sharkCreator( 'Laserbeam');
var sharkWithFrickinCannon = sharkCreator('Cannon');
