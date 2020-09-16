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
  findPlant (id) {
    for (let i=0; i < this.plants.length; i++) {
      if (this.contacts[i]) { 
        if (this.plants[i].id == id) {
          return this.plants[i];
        }
      }
    }
    return false;
  }
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
    if(this.waterDay == "true"){
      let firstDay = new Date(); //current date
      let daysTilWatering;
      if(this.type == "succulent"){
        daysTilWatering = 7;
        this.waterNote = "You will need to water your plant within 7 days. In addition, if the leaves feel rubbery and bend easily at any point, please water your succulent. If the leaves change color, you are over watering your succulent.";
      } else if (this.type == "cactus") {
        daysTilWatering = 6;
        this.waterNote = "You will need to water your plant again in 6 days. Let cacti dry completely between waterings.";
      } else if(this.type == "flower") {
        daysTilWatering = 3;
        this.waterNote = "Many indoor flowers (except orchids) will need to be watered again in about 3 days.";
      } else {
        daysTilWatering = 4;
        this.waterNote = "You will need to water your plant again in 4 days. Ferns like to be misted, and moist but not waterlogged.";
      }
    
      let nextWater = new Date(firstDay.getTime() + daysTilWatering * 24 * 60 * 60 * 1000);
      this.waterDay = `Water next on ${nextWater}`.slice(0,30);
    } else {
      this.waterDay = "Don't forget to water!";
    }
  }

}  