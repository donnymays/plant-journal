import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Plant from './plant.js';
import Journal from './journal.js';

// function showPlant(plantToDisplay) {
//   let plantsList = $("ul#plants");
//   let htmlForPlantInfo = "";
//   plantToDisplay.plants.forEach(function(plant) {
//     htmlForPlantInfo += "<li id=" + plant.id + ">" + plant.name + " " + "</li>";
//   });
//   plantsList.append(htmlForPlantInfo);
// }


function showPlantCard(plantCardToDisplay) {
  let plantDiv = $("div#plantCards");
  let htmlForPlantCard = "";
  plantCardToDisplay.plants.forEach(function (plant) {
    htmlForPlantCard += "<div class='col-md-4'><div class='card'><div class='card-body'><h5 id='plantCardTitle' class='card-title'>" + plant.name + "</h5><h6 id='plantCardType' class='card-subtitle mb-2 text-muted'>" + plant.type + "</h6><p>" + plant.birthday + "</p><p>" + plant.waterDay + "</p>";
    plantDiv.append(htmlForPlantCard);
  });
};








$(document).ready(function () {
  $("#addPlant").submit(function () {
    event.preventDefault();

    let inputtedPlantName = $("input#plantName").val();
    let inputtedPlantType = $("input:radio[name=plantType]:checked").val();
    let inputtedPlantDate = $("input#plantBirthday").val();
    let inputtedWaterDay = $("input:radio[name=waterDay]:checked").val();

    $("input#plantName").val("");
    // $("input:radio[name=plantType]:checked").val("");
    $("input#plantBirthday").val("");
    // $("input:radio[name=waterDay]:checked").val("");

    let newPlant = new Plant(inputtedPlantName, inputtedPlantType, inputtedPlantDate, inputtedWaterDay);
    let journal = new Journal();
    journal.addPlant(newPlant);
    showPlantCard(journal);

  });
});