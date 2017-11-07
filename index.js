const app = "I don't do much."
//creating bumpcounter function
function bumpCounter() {
//variable counter = 0 aka nothing given
  let counter = 0
//bumpCounter's inner functions
  function addBump() {
//addBump is increasing counter by 1
    return counter++
  }
  function getBumps() {
//getBumps returns current count
    return counter
  }
  return {
//returned after gone through function
    addBump,
    getBumps
  };
}

//created createAnimal function with animalType parameter
function createAnimal(animalType) {
//createAnimal inner function
//if no function name, leave empty.
//has deadlyDevice parameter
  return function(deadlyDevice) {
//empty function with deadlyDevice paramenter returns output
    return {animalType, deadlyDevice}
  }
}

//const=variable, its calling createAnimal function and adding 'Shark' string
//making sharkCreator into a variable with shark as parameter
const sharkCreator = createAnimal('Shark');
//calling sharkCreator or(createAnimal(Shark)), and adding a deadly device
const sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
//calling sharkCreator or(createAnimal(Shark)), and adding a deadly device
const sharkWithFrickinCannon = sharkCreator('Cannon');
// var or const, dont matter
