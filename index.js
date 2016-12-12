const app = "I don't do much."

function bumpCounter(){
 	var counter = 0; 
	
	function addBump(){ 
		counter = counter + 1;
		return counter;
	}

	function getBumps(){ 
		return counter;
	}

	return {
		addBump,
		getBumps
		};
}

function createAnimal(animalType){ 
	function deadlyDevice(weapon){ 
		var dangerousAnimals = {animalType:animalType, deadlyDevice:weapon};
		return dangerousAnimals;
	}
	return deadlyDevice;
}

const sharkCreator = createAnimal('Shark');
const sharkWithFrickinLaserbeam = sharkCreator('Laserbeam'); 
const sharkWithFrickinCannon = sharkCreator('Cannon');