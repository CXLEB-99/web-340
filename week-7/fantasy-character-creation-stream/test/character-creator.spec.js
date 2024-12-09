const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    const input = JSON.stringify({
      class: "Warrior",
      gender: "Male",
      funFact: "I love sword fighting!"
    });

    let data = '';
    characterCreator.on('data', chunk => {
      data += chunk.toString();
    });

    characterCreator.write(input, () => {
      expect(data).toBe(
        'Introducing a Male Warrior from the lands of fantasy. Fun Fact: I love sword fighting!'
      );
      done();
    });
  });

  test("should emit 'error' when invalid data is written", (done) => {
    const input = '';

    characterCreator.on('error', (error) => {
      expect(error).toBeDefined();
      done();
    });

    characterCreator.write(input);
  });

  test("should transform data correctly when written to", (done) => {
    const input = JSON.stringify({
      class: "Mage",
      gender: "Female",
      funFact: "I cast lightning spells."
    });

    let data = '';
    characterCreator.on('data', chunk => {
      data += chunk.toString();
    });

    characterCreator.write(input, () => {
      expect(data).toBe(
        'Introducing a Female Mage from the lands of fantasy. Fun Fact: I cast lightning spells.'
      );
      done();
    });
  });
});
