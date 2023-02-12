import Man from "./man.js";

export default class Male extends Man {
    constructor(name, age, gender, workExperience) {
        super(name, age, gender, workExperience)
        this.shortHair = true;
        this.shortNail = true;
        this.gentleVoice = false;
        this.workExperience = true;
        this.workLevelHi = 'Farmer';
    }

    rabotnik(work = 'trop trop trop') {
        if (this.workExperience === true) {
            console.log(work);
        } else {
            console.log(work='false');
            
        }

    }
    farmer (vika= ' Naaaa roskaaa Naaaa'){
        if (this.workLevelHi === 'Farmer') {
            console.log(vika);
        } else {
            console.log(vika='false');
            
        }

    
    }
}
