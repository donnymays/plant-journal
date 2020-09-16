import {Journal} from '../src/journal.js';
import { Plant } from '../src/journal.js';

describe('Journal', () => {

  test('should correctly add a Plant object to the plants array', () => {
    const plant = new Plant("Mr. Cactus");
    const plant2 = new Plant("Mr. Flower");
    const journal = new Journal();
    journal.addPlant(plant);
    journal.addPlant(plant2);
    expect(journal.plants.length).toEqual(2);
  }); 

  test('should correctly increase id by one', () => {
    const plant = new Plant("Mr. Cactus");
    const plant2 = new Plant("Mr. Flower");
    const journal = new Journal();
    journal.addPlant(plant);
    journal.addPlant(plant2);
    expect(plant2.id).toEqual(2);
  }); 

});