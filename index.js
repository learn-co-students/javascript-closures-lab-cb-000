const app = "I don't do much."

const bumpCounter = () => {
  let counter = 0;

  const addBump = () => {
    counter += 1
  }

  const getBumps = () => {
    return counter
  }

  return {
    addBump: addBump,
    getBumps: getBumps
  }

}

//  ===========================================================

const createAnimal = (animalType) => {
  return (deadlyDevice) => {
    return {animalType: animalType, deadlyDevice: deadlyDevice}

  }
}

const sharkCreator = createAnimal('Shark')
const sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
const sharkWithFrickinCannon = sharkCreator('Cannon')
