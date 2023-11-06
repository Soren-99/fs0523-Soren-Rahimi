class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    sameOwner(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}

const petList = [];

function createPet() {
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const newPet = new Pet(petName, ownerName, species, breed);
    petList.push(newPet);
    displayPetList();
}

function displayPetList() {
    const listElement = document.getElementById('petList');
    listElement.innerHTML = '';
    petList.forEach((pet) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
        listElement.appendChild(listItem);
    });
}
