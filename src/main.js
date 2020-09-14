import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Plant from './plant';

$(document).ready(function)() {
  $("#addPlant").submit(function() {
    let inputtedPlantName = $("input#plantName").val();
    let inputtedPlantType = $(input#plantType).val();
    let inputtedPlantDate = $(input#plantBirthday).val();
    let inputtedWaterDay = $(input#WaterDay).val();

    let newPlant = new Plant(inputtedPlantName, inputtedPlantType, inputtedPlantDate, inputtedWaterDay);
    

  })
}