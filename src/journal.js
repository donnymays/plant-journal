export class Journal {
  constructor() {
    this.plants = [];
    this.currentId = 0;
  }
  addPlant(plant) {
    plant.id = this.assignId();
    this.plants.push(plant);
  }
  assignId() {
    this.currentId += 1;
    return this.currentId;
  }
  findPlant(id) {
    for (let i = 0; i < this.plants.length; i++) {
      if (this.contacts[i]) {
        if (this.plants[i].id == id) {
          return this.plants[i];
        }
      }
    }
    return false;
  }
  removePlant(id) {
    for (let i = 0; i < this.plants.length; i++) {
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
    this.waterInstructions = "";
  }

  waterDate(inputDate) {
    let daysTilWatering = 0;

    if (this.type == "succulent") {
      daysTilWatering += 10;
      this.waterDay = daysTilWatering - inputDate;
      this.waterNote = "You will need to water your plant about every 10 days. In addition, if the leaves feel rubbery and bend easily at any point, please water your succulent. If the leaves change color, you are over watering your succulent.";
    } else if (this.type == "cactus") {
      daysTilWatering += 14;
      this.waterDay = daysTilWatering - inputDate;
      this.waterNote = "You will need to water your plant about every 14 days. Let cacti dry completely between waterings.";
    } else if (this.type == "flower") {
      daysTilWatering += 7;
      this.waterDay = daysTilWatering - inputDate;
      this.waterNote = "Many indoor flowers (except orchids) will need to be watered every 7 days.";
    } else {
      daysTilWatering += 4;
      this.waterDay = daysTilWatering - inputDate;
      this.waterNote = "You will need to water your plant about every 4 days. Ferns like to be misted, and moist but not waterlogged.";
    }
    if (this.waterDay > 0) {
      this.waterDay += " days until the next watering";
    } else {
      this.waterDay = "Water Me Please!"
    }
  }

  //this method works but it needs to somehow change the DOM ->plant.waterDay in the crazy html function in main.js
  resetWaterDay() {
    if (this.type == "succulent") {
      this.waterDay = "10 days until the next watering";
    } else if (this.type == "cactus") {
      this.waterDay = "14 days until the next watering";
    } else if (this.type == "flower") {
      this.waterDay = "7 days until the next watering";
    } else {
      this.waterDay = "4 days until the next watering";
    }
  }
}
