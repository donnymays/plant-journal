import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Plant from './plant';

$(document).ready(function() {
  $("#addPlant").submit(function() {
    event.preventDefault();

    let inputtedPlantName = $("input#plantName").val();
    let inputtedPlantType = $("input:radio[name=plantType]:checked").val();
    let inputtedPlantDate = $("input#plantBirthday").val();
    let inputtedWaterDay = $("input:radio[name=waterDay]:checked").val();

    let newPlant = new Plant(inputtedPlantName, inputtedPlantType, inputtedPlantDate, inputtedWaterDay);
    console.log(newPlant);

  });
});