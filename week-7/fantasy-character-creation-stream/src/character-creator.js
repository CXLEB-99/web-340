const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
  }

  // Handle data writing
  _write(chunk, encoding, callback) {
    try {
      const input = JSON.parse(chunk.toString());
      if (!input.class || !input.gender || !input.funFact) {
        this.emit('error', new Error('Invalid input data'));
        return callback();
      }

      const description = `Introducing a ${input.gender} ${input.class} from the lands of fantasy. Fun Fact: ${input.funFact}`;
      this.push(description);
      callback();
    } catch (error) {
      this.emit('error', new Error('Invalid JSON'));
      callback();
    }
  }

  // Handle reading logic
  _read(size) {
    // Not necessary unless more advanced stream logic is needed
  }
}

module.exports = CharacterCreator;
