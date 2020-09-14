import Journal from '../src/journal.js';

describe('Journal', () => {

  test('should correctly create a Plant object with properties', () => {
    const plant = new Plant(5,10);
    expect(plant.age).toEqual(6);
  }); 
});