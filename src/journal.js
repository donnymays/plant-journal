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
      if(this.type == "succulent" || this.type == "cactus"){
        daysTilWatering = 7;
      } else if(this.type == "flower") {
        daysTilWatering = 3;
      } else {
        daysTilWatering = 4;
      }
    
      let nextWater = new Date(firstDay.getTime() + daysTilWatering * 24 * 60 * 60 * 1000);
      this.waterDay = `Water next on ${nextWater}`.slice(0,30);
    } else {
      this.waterDay = "Don't forget to water!";
    }
  }

  isWatered(){
    if(this.type == "succulent"){
      let water = "You will need to water your plant within 7 days. In addition, if the leaves feel rubbery and bend easily at any point, please water your succulent. If the leaves change color, you are over watering your succulent.";
      this.waterNote = water;
    }
    else if(this.type == "cactus"){
      let water ="You will need to water your plant again in 7 days. Let cacti dry completely between waterings.";
      this.waterNote = water;
    }
    else if(this.type == "flower"){
      let water ="You will need to water your plant again in 3 days.";
      this.waterNote = water;
    }
    else if(this.type == "fern"){
      let water ="You will need to water your plant again in 4 days. Ferns like to be moist but not waterlogged.";
      this.waterNote = water;
    }
  }
}  