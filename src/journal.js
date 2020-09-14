export default class Journal {
  constructor(plants) {
    this.plants = [];
    this.currentId = 0;
  }
  addContact() {
    plant.id = this.assignId();
    this.plants.push(plant);
  }
  assignId (){
    this.currentId += 1;
    return this.currentId;
  }
}