import Mamals from "../mamals.js";

export default class Man extends Mamals{
    constructor(name, age, gender,occupation, workExperience){
        super(name, age, gender,occupation, workExperience)

        this.workExperience = workExperience;
        this.speaks = true;
        this.numbOfLeg = 2;
        this.nubOfArms = 2;
        this.nuberOfFingerOnArm = 5;
    }


}