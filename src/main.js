import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import  Plant from './plant.js';
import { Journal, Plant } from './journal.js';


function showPlantCard(plant) {
  let plantDiv = $("div#bottomDiv");
  let htmlForPlantCard = "";
  htmlForPlantCard += "<div class='col-md-4'><div class='card plantCard' id='plantCard" + plant.id + "'><div class='card-body'><h5 class='card-title'>" + plant.name + "</h5><h6 id='plantCardType' class='card-subtitle mb-2'>" + plant.type + "</h6><p>" + plant.birthday + "</p><p>" + plant.waterDay + "</p><button class='btn-dark deleteButton' type='button'>Remove plant</button>";
  plantDiv.append(htmlForPlantCard);
}

let journal = new Journal();

$(document).ready(function () {
  $("#addPlant").submit(function () {
    event.preventDefault();

    let inputtedPlantName = $("input#plantName").val();
    let inputtedPlantType = $("input:radio[name=plantType]:checked").val();
    let inputtedPlantDate = $("input#plantBirthday").val();
    let inputtedWaterDay = $("input:radio[name=waterDay]:checked").val();
   
    $("input#plantName").val("");
    $("input#plantBirthday").val("");

    let newPlant = new Plant(inputtedPlantName, inputtedPlantType, inputtedPlantDate, inputtedWaterDay);
    
    journal.addPlant(newPlant);
    console.log(journal.plants);
    showPlantCard(newPlant);

    $(".deleteButton").click(function () {
      journal.removePlant(this.id);
      $("#bottomDiv").hide();
      alert("it works");
    })
  }); 
});

