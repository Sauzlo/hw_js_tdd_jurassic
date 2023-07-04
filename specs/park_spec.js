const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function () {
    park = new Park('Jurassic Park', 50);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('triceratops', 'herbivore', 30);
    dinosaur3 = new Dinosaur('diplodocus', 'herbivore', 35);
    dinosaur4 = new Dinosaur('t-rex', 'carnivore', 45);

  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaurToCollection(dinosaur1);
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaurToCollection(dinosaur1);
    park.addDinosaurToCollection(dinosaur2);
    park.removeDinosaurFromCollection(dinosaur1);
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaurToCollection(dinosaur1);
    park.addDinosaurToCollection(dinosaur2);
    park.addDinosaurToCollection(dinosaur3);
    const actual = park.popularDinosaur();
    assert.deepStrictEqual(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaurToCollection(dinosaur1);
    park.addDinosaurToCollection(dinosaur2);
    park.addDinosaurToCollection(dinosaur3);
    park.addDinosaurToCollection(dinosaur4);
    const results = park.findDinosaursBySpecies("t-rex");
    const actual = results.length;
    assert.strictEqual(actual, 2)
  });

  it('should be able to calculate the total number of visitors per day', function() {
    park.addDinosaurToCollection(dinosaur1);
    park.addDinosaurToCollection(dinosaur2);
    park.addDinosaurToCollection(dinosaur3);
    const actual = park.calculateDailyVisitors();
    assert.strictEqual(actual, 115)
  });

  it('should be able to calculate the total number of visitors per year', function() {
    park.addDinosaurToCollection(dinosaur1);
    park.addDinosaurToCollection(dinosaur2);
    park.addDinosaurToCollection(dinosaur3);
    const actual = park.calculateYearlyVisitors();
    assert.strictEqual(actual, 41975);
  });

  it('should be able to calculate total revenue for one year', function() {
    park.addDinosaurToCollection(dinosaur1);
    park.addDinosaurToCollection(dinosaur2);
    park.addDinosaurToCollection(dinosaur3);
    const actual = park.calculateYearlyRevenue();
    assert.strictEqual(actual, 2098750);
  });

});
