const path = require('path');
const fs = require('fs');
const { createCharacter, getCharacters } = require('../src/character-creation.js');

// Mock the entire fs.promises safely
jest.mock('fs', () => {
  return {
    promises: {
      writeFile: jest.fn().mockResolvedValue(),
      readFile: jest.fn().mockResolvedValue(JSON.stringify([{ class: "Mage", gender: "Female", fun: "Can summon fireballs" }])),
    },
  };
});

const mockCharacter = {
  class: 'Mage',
  gender: 'Female',
  fun: 'Can summon fireballs',
};

beforeEach(() => {
  jest.clearAllMocks(); // Clear mocks before each test
});

test('should write a new character to the file', async () => {
  const fileName = path.join(__dirname, '../src/characters.json');

  await createCharacter(mockCharacter);

  expect(fs.promises.writeFile).toHaveBeenCalledWith(
    fileName,
    JSON.stringify([mockCharacter], null, 2),
    'utf8'
  );
});

test('should read characters from the file', async () => {
  const fileName = path.join(__dirname, '../src/characters.json');
  const result = await getCharacters();

  expect(fs.promises.readFile).toHaveBeenCalledWith(fileName, 'utf8');
  expect(result).toEqual([{ class: 'Mage', gender: 'Female', fun: 'Can summon fireballs' }]);
});

test('should handle errors when reading characters from the file', async () => {
  fs.promises.readFile.mockRejectedValue(new Error('File read error'));

  await expect(getCharacters()).rejects.toThrow('File read error');
  expect(fs.promises.readFile).toHaveBeenCalledWith(
    expect.stringMatching(/characters.json$/),
    'utf8'
  );
});
