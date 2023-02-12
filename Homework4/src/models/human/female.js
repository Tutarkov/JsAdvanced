import Man from "./man.js";

export default class Female extends Man{
    constructor(name, age, gender, workExperience){
        super(name, age, gender, workExperience)

        this.shortHair = false;
        this.shortNail = 'Long';
        this.gentleVoice = "mnjauu";
        this.workExperience = 'Singer';
    }

    singer (sing = 'dzma dzm dzm') {
        if (this.workExperience === 'Singer') {
            console.log(sing);
        } else {
            console.log(sing='false');
            
        }

    }
}