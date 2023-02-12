import Animal from "./animal.js";

export default class horse extends Animal{
    constructor(name, age , gender){
        super(name, age , gender);

        this.numberOfLegs = 4;
        this.gallops = true;
        this.Grive = true;
    }

    gallop(soundofGalloping = 'tk tk tk'){
        console.log(soundofGalloping);
    }
    run(soundOfrunning = ' tgdk tgdk'){
        console.log(soundOfrunning);
    }

    die(causeOfDeath){
        super.die(causeOfDeath);
        this.gallops = false;
    }
}