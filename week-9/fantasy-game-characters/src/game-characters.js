// game-characters.js
const { spawn } = require('child_process');
const path = require('path');

class GameCharacters {
  constructor(scriptName) {
    this.scriptPath = path.join(__dirname, scriptName);
  }

  getCharacters(callback) {
    const child = spawn('node', [this.scriptPath]);

    let data = '';
    let error = null;

    child.stdout.on('data', (chunk) => {
      data += chunk;
    });

    child.stderr.on('data', (chunk) => {
      error = chunk.toString();
    });

    child.on('close', (code) => {
      if (code !== 0) {
        callback(error || `Process exited with code ${code}`, null);
      } else {
        try {
          callback(null, JSON.parse(data));
        } catch (e) {
          callback('Error parsing data', null);
        }
      }
    });
  }
}

module.exports = GameCharacters;
