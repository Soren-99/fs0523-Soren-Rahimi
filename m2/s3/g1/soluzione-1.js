class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    compareAgeWith(otherUser) {
        if (this.age > otherUser.age) {
            return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
        } else if (this.age < otherUser.age) {
            return `${this.firstName} è più giovane di ${otherUser.firstName}`;
        } else {
            return `${this.firstName} ha la stessa età di ${otherUser.firstName}`
        }
    }
}

const user1 = new User('Mario', 'Rossi', 30, 'Roma');
const user2 = new User('Paolo', 'Bianchi', 35, 'Napoli');

console.log(user1.compareAgeWith(user2));