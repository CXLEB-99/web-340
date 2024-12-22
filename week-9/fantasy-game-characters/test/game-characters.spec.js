// game-characters.spec.js
const GameCharacters = require('../src/game-characters');
const path = require('path');

describe('GameCharacters', () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters('game-characters-data.js');
  });

  test('should return game characters data', (done) => {
    gameCharacters.getCharacters((error, data) => {
      expect(error).toBeNull();
      expect(data).toEqual([
        { class: 'Warrior', gender: 'Male', funFact: 'Wields a mighty sword' },
        { class: 'Mage', gender: 'Female', funFact: 'Master of elemental spells' },
        { class: 'Rogue', gender: 'Other', funFact: 'Stealthy and quick' },
      ]);
      done();
    });
  });

  test('should handle missing script file error', (done) => {
    const invalidGameCharacters = new GameCharacters('invalid-script.js');
    invalidGameCharacters.getCharacters((error, data) => {
      expect(error).toBeDefined();
      expect(data).toBeNull();
      done();
    });
  });

  test('should handle error in script execution', (done) => {
    const failingGameCharacters = new GameCharacters('failing-script.js');
    failingGameCharacters.getCharacters((error, data) => {
      expect(error).toBe('This is an intentional error!\n');
      expect(data).toBeNull();
      done();
    });
  });
});
