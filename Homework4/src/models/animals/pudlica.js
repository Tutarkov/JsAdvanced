import dog from "./dog.js";

export default class pudlica extends dog{
    constructor(name, age , gender){
        super(name, age , gender);

        this.type

    }

    bark(whatToBark = 'ciu ciu'){
    super.bark(whatToBark);
    this.showsTeeth = true;
    }

}