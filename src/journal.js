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

    if (this.type == "Succulent") {
      daysTilWatering += 10;
      this.waterDay = daysTilWatering - inputDate;
      this.waterNote = "You will need to water your plant about every 10 days. In addition, if the leaves feel rubbery and bend easily at any point, please water your succulent. If the leaves change color, you are over watering your succulent.";
    } else if (this.type == "Cactus") {
      daysTilWatering += 14;
      this.waterDay = daysTilWatering - inputDate;
      this.waterNote = "You will need to water your plant about every 14 days. Let cacti dry completely between waterings.";
    } else if (this.type == "Flower") {
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
  resetWaterDay() {
    if (this.type == "Succulent") {
      this.waterDay = "10 days until the next watering";
    } else if (this.type == "Cactus") {
      this.waterDay = "14 days until the next watering";
    } else if (this.type == "Flower") {
      this.waterDay = "7 days until the next watering";
    } else {
      this.waterDay = "4 days until the next watering";
    }
  }
  createTypeSpan() {
    if (this.type == "Succulent") {
      let succulentSpan = "<span>10 days until the next watering</span>";
    } else if (this.type == "Cactus") {
      let cactusSpan = "<span>14 days until the next watering</span>";
    } else if (this.type == "Flower") {
      let flowerSpan = "<span>7 days until the next watering</span>";
    } else {
      let fernSpan = "<span>4 days until the next watering</span>";
    }
  }
}
