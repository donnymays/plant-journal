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
function showPlantCardTitle() {

}


$(document).ready(function() {
  $("#addPlant").submit(function() {
    event.preventDefault();

    let inputtedPlantName = $("input#plantName").val();
    let inputtedPlantType = $("input:radio[name=plantType]:checked").val();
    let inputtedPlantDate = $("input#plantBirthday").val();
    let inputtedWaterDay = $("input:radio[name=waterDay]:checked").val();

    let newPlant = new Plant(inputtedPlantName, inputtedPlantType, inputtedPlantDate, inputtedWaterDay);
    let journal = new Journal();
    journal.addPlant(newPlant);
    console.log(journal.plants);
    showPlant(journal);

  });
});