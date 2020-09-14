import Plant from '../src/plant.js';

describe('Plant', () => {

  test('should correctly create a Plant object with properties', () => {
    const plant = new Plant(joe,10);
    expect(plant.name).toEqual(6);
  }); 
});