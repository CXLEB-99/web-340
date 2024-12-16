const fs = require('fs');
const path = require('path');

// Determine the file path dynamically
const fileName = path.join(__dirname, 'characters.json');

/**
 * Creates a new character by writing it to the file.
 * @param {Object} character The character to save.
 */
const createCharacter = async (character) => {
  // Validate the class and gender
  const validClasses = ['Warrior', 'Mage', 'Rogue'];
  const validGenders = ['Male', 'Female', 'Other'];

  if (!validClasses.includes(character.class)) {
    throw new Error('Invalid class type');
  }

  if (!validGenders.includes(character.gender)) {
    throw new Error('Invalid gender type');
  }

  const characters = [character];
  await fs.promises.writeFile(fileName, JSON.stringify(characters, null, 2), 'utf8');
};

/**
 * Reads characters from the file.
 * @returns {Promise<Object[]>} List of characters
 */
const getCharacters = async () => {
  const data = await fs.promises.readFile(fileName, 'utf8');
  return JSON.parse(data);
};

module.exports = {
  createCharacter,
  getCharacters,
};
