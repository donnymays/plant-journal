import { Journal, Plant } from '../src/journal.js';
// import Plant from '../src/journal.js';

describe('Plant', () => { 

  test('should correctly create a Plant object with properties', () => {
    const plant = new Plant("Mr. Cactus", "cactus", "2020-09-11", true);
    expect(plant.type).toEqual("cactus");
  });  
 
test('should correctly return whether the plant has been watered or not', () => {
  const plant = new Plant("Mr. Cactus", "cactus", "2020-09-11", true);
  expect(plant.waterDay).toEqual(true);
});

test('should correctly return the date + watering period = future date set to waterDay', () => {
  const plant = new Plant("Mr. Cactus", "cactus", "2020-09-11", true);
  plant.waterDate();
  expect(plant.waterDay).toEqual("11/22/2020");       
}); 

test('should correctly return how long until the plant needs to be watered again', () => {

  const plant = new Plant("Mr. Cactus", "succulent", "2020-09-11", true);
  plant.isWatered();  
  expect(plant.waterNote).toEqual("You will need to water your plant within 7 days. In addition, if the leaves feel rubbery and bend easily at any point, please water your succulent. If the leaves change color, you are over watering your succulent.");
});   

test('should correctly add the plants to a calendar on the designated date', () => {
  
});


});

