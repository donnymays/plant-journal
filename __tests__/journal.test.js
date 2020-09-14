import Journal from '../src/journal.js';
import { Plant } from '../src/journal.js';

describe('Journal', () => {

  test('should correctly add a Plant object to the Journal array', () => {
    const plant = new Plant("Mr. Cactus");
    const journal = new Journal();
    journal.addPlant();
    console.log(journal.plants);
    expect(journal.plants.length).toEqual(1);
  }); 
});