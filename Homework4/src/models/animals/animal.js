import Mamals from "../mamals.js";

export default class Animal extends Mamals{
    constructor(name, age , gender){
        super(name, age , gender);
        
        this.speaks = false;
        this.hasFur = true;
    }
}