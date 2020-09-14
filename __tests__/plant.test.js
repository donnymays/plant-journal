import Plant from '../src/plant.js';

describe('Plant', () => {

  test('should correctly create a Plant object with properties', () => {
    const plant = new Plant("Mr. Cactus", "cactus", "2020-09-11", true);
    expect(plant.type).toEqual("cactus");
  }); 
});