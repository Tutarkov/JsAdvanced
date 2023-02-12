import horse from "./models/animal/horse.js";
import sarplaninec from "./models/animal/sarplaninec.js";
import pudlica from "./models/animal/pudlica.js";
import Male from "./models/human/male.js";
import Female from "./models/human/female.js";
console.log('main class');

const horse1 = new horse('Goce', 7 ,'Male');

console.log(horse1);

horse1.die();
console.log(horse1);

const newSarplaninec = new sarplaninec ( 'Sarko', 5, 'Male');
newSarplaninec.die();
console.log(newSarplaninec);

const pudlica1 = new pudlica ('Sarko', 5, undefined);
pudlica1.bark();

const human = new Male ('Kristijan', 32, 'Male', 'Shef');
console.log(human);
human.rabotnik();
human.farmer();

const female1 =  new Female('Viktorija', 24, 'Female', 'Singer');
console.log(female1);
female1.singer();

