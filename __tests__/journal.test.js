import Journal from '../src/journal.js';
import { Plant } from '../src/journal.js';

describe('Journal', () => {

  test('should correctly add a Plant object to the Journal array', () => {
    const plant = new Plant("Mr. Cactus");
    const journal = new Journal();
    journal.addPlant();
    expect(journal.plants.length).toEqual(1);
  }); 

});