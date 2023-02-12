import Animal from "./animal.js";

export default class dog extends Animal{
    constructor(name, age , gender){
        super(name, age , gender);

        this.nuberOfLegs = 4;
        this.barks = true;
    }

    bark(whatToBark = 'bark bark bark'){
        if(!this.isAlive)return;

        if(this.name == 'Sarko'){
            whatToBark = 'sarko ne lae na domasni'
        }
        console.log(whatToBark);
    }

    die(causeOfDeath = 'kola go gazi'){
        super.die(causeOfDeath);
        this.bark = false;
    }
}