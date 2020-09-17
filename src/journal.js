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
    this.waterDay = waterDay; // days since last watered
    this.waterNote = "";
    this.waterInstructions = "";
  }

  waterDate(inputDate) {
    // let firstDay = this.waterDay; //date last watered 
  // difference between
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
        // this.waterInstructions = `Water your plant again in ${daysUntilUserWaters} days`
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
    console.log(this.waterDay);
   
 
  }
}

  // dateLastWatered = dateToday - dayLast watered
  // nextWaterDate = 
 // let todaysDate = new Date();
    // let formattedTodaysDate = new Date(todaysDate.getTime() - (todaysDate.getTimezoneOffset() * 60000 ))
    // .toISOString()
    // .split("T")[0];

    // let nextWater = new Date(formattedTodaysDate.getTime() + daysUntilUserWaters * 24 * 60 * 60 * 1000);
    // let nextWater = new Date(365 + daysUntilUserWaters * 24 * 60 * 60 * 1000);

    // this.waterDay = `Water next on ${nextWater}`.slice(0, 30);
    // console.log(today);
    // console.log(firstDay);
  //input = days since last water
  //days until next water = (days til watering - days since last water)
  //display on card = days until next water


  // firstDay = waterDay form input
  // waterDay input - daysTilWatering = daysTilWatering to display (if negative "Water Your Plant!!")
  // Water plant button click change firstDay to currentDay


  //  let daysWateredAge = new Date(firstDay.getTime() - daysAgo * 24 * 60 * 60 * 1000);
