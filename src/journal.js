export class Journal {
  constructor() {
    this.plants = [];
    this.currentId = 0;
  }
  addPlant(plant) { 
    plant.id = this.assignId();
    this.plants.push(plant);
  }
  assignId (){
    this.currentId += 1;
    return this.currentId;
  }
  // findPlant (id) {
  //   for (let i=0; i < this.plants.length; i++) {
  //     if (this.plants[i].id == id) {
  //       return this.plants[i];
  //     }
  //   };
  //   return false;
  // }

  removePlant(id) {
    for (let i=0; i<this.plants.length; i++) {
      if (this.plants[i]) {
        if (this.plants[i].id == id) {
          delete this.plants[i];
          return true;
        }
      }
    } 
    return false; 
  }
}

export class Plant {
  constructor(name, type, birthday, waterDay) {
    this.name = name;
    this.type = type;
    this.birthday = birthday;
    this.waterDay = waterDay;
    this.waterNote = "";
  }

  waterDate(){
    if(this.waterDay == true){
      let firstDay = new Date(); //current date
      let nextWeek = new Date(firstDay.getTime() + 7 * 24 * 60 * 60 * 1000);
      this.waterDay = nextWeek;
    }
  }

  isWatered(){
    if(this.type == "succulent"){
      let water = "You will need to water your plant within 7 days. In addition, if the leaves feel rubbery and bend easily at any point, please water your succulent. If the leaves change color, you are over watering your succulent.";
      this.waterNote = water;
    }
    else if(this.type == "Cactus"){
      let water ="You will need to water your plant again in 7 days. Let cacti dry completely between waterings.";
      this.waterNote = water;
    }
    else if(this.type == "Flower"){
      let water ="You will need to water your plant again in 3 days.";
      this.waterNote = water;
    }
    else if(this.type == "Fern"){
      let water ="You will need to water your plant again in 7 days. Ferns like to be moist but not waterlogged.";
      this.waterNote = water;
    }
  }
}  