import Animal from "./animal.js";

export default class sarplaninec extends Animal{
    constructor(name, age , gender){
        super(name, age , gender);

        this.Shephear = true;
        this.doesntAfraidofBers = true;
        this.scaresWolvse = true;
        this.barking = true;

    }
    bark (whatToBark){
        super.bark(whatToBark);
        this.barking = false;
        console.log('Sarko ne lae na domasni');
    }
}