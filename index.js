const app = "I don't do much."

function bumpCounter() {
    var counter = 0;

    function addBump() {
        counter++;
    }

    function getBumps() {
        return counter;
    }
    return { addBump, getBumps }
}

function createAnimal(animalType) {
    function deadlyDevice (deadlyDevice) {
        newObj = new Object( {animalType: animalType, deadlyDevice: deadlyDevice});
        return newObj;
    }

    
 

    return deadlyDevice;
}

var sharkCreator =  createAnimal('Shark');
var sharkWithFrickinLaserbeam = new Object( {animalType: 'Shark', deadlyDevice: 'Laserbeam'} )
var sharkWithFrickinCannon = new Object ( {animalType: 'Shark', deadlyDevice: 'Cannon'});