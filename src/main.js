import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Plant, Journal } from './journal.js';


function removePlant(id) {
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

function attachPlantListeners() {
  $('#deleteButton').click(function() {
    removePlant(this.id);
  });
}

function showPlantCard(plantCardToDisplay) {
  let plantDiv = $("div#bottomDiv");
  let htmlForPlantCard = "";
  plantCardToDisplay.plants.forEach(function (plant) {
    htmlForPlantCard += "<div class='col-md-4'><div class='card plantCard' ><div class='card-body'><h5 id='plantCardTitle' class='card-title'>" + plant.name + "</h5><h6 id='plantCardType' class='card-subtitle mb-2'>" + plant.type + "</h6><p>" + plant.birthday + "</p><p>" + plant.waterDay + "</p><button id='deleteButton' class='btn-dark' type='button'>Remove plant</button>";
    plantDiv.append(htmlForPlantCard);
  });
}


$(document).ready(function () {
  attachPlantListeners();
  $("#addPlant").submit(function () {
    event.preventDefault();

    let inputtedPlantName = $("input#plantName").val();
    let inputtedPlantType = $("input:radio[name=plantType]:checked").val();
    let inputtedPlantDate = $("input#plantBirthday").val();
    let inputtedWaterDay = $("input:radio[name=waterDay]:checked").val();
   
    $("input#plantName").val("");
    $("input#plantBirthday").val("");

    let newPlant = new Plant(inputtedPlantName, inputtedPlantType, inputtedPlantDate, inputtedWaterDay);
    newPlant.waterDate();
    let journal = new Journal();
    journal.addPlant(newPlant);
    showPlantCard(journal);

  });
});