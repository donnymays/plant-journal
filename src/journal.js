export default class Journal {
  constructor(plants, currentId) {
    this.plants = [];
    this.currentId = 0;
  }
  addPlant(plant) { 
    this.plants.push(plant);
  }
  assignId (){
    this.currentId += 1;
    return this.currentId;
  }
}