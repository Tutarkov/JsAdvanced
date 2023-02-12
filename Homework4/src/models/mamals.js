export default class Mamals {
    constructor(name,age, gender){

        this.type = this.constructor.name;
        this.nuberOfLegs;
        this.gender = gender;
        this.name = name;
        this.age = age;
        

        this.drinksMilk = true;
        this.hasWarmBlood = true;
        this.numberOfEyes = 2;
        this.breaths = true,
        this.hasePulse = true;
        this.Alive = true;
    }

    die(causeOfDeath= 'natural causes'){
        this.isAlive = false;
        this.hasPulse = false;
        this.breaths = false;
        this.causeOfDeath = causeOfDeath;
        console.warn(`CAUSE OF DEATH: ${this.causeOfDeath}`);
    }


}