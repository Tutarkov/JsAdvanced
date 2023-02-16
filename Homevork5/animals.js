class Animal {
    constructor(name, animalType, age, size) {
      this.name = name;
      this.animalType = animalType;
      this.age = age;
      this.size = size;
      this.isEaten = false;
    }
  
    eat(food) {
      if (food instanceof Animal) {
        if (this.animalType === 'herbivore') {
          console.log(`The animal ${this.name} is a herbivore and does not eat other animals`);
        } else if (food.size <= this.size * 2) {
          food.isEaten = true;
          console.log(`The animal ${this.name} ate the ${food.name}`);
        } else {
          console.log(`The animal ${this.name} tried to eat the ${food.name} but it was too large.`);
        }
      } else {
        console.log(`The animal ${this.name} is eating ${food}`);
      }
    }
  }