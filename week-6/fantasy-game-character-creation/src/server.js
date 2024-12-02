const http = require('http'); // Import the 'http' module
const url = require('url');

// Temporary in-memory storage for the character
let character = null;

// Function to reset character before each test (in-memory)
const resetCharacter = () => {
  character = null;
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  
  // Middleware to parse JSON body
  let body = '';
  req.on('data', chunk => {
    body += chunk;
  });
  
  req.on('end', () => {
    if (body) {
      body = JSON.parse(body);
    }

    // POST /create-character
    if (req.method === 'POST' && parsedUrl.pathname === '/create-character') {
      const { characterClass, gender, funFact } = body;
      
      // Check if required fields are provided
      if (!characterClass || !gender || !funFact) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Missing required fields' }));
        return;
      }

      // Store the character
      character = { characterClass, gender, funFact };
      
      res.statusCode = 201;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Character created' }));
    }

    // POST /confirm-character
    else if (req.method === 'POST' && parsedUrl.pathname === '/confirm-character') {
      if (!character) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'No character created yet' }));
        return;
      }

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Character creation confirmed' }));
    }

    // GET /view-character
    else if (req.method === 'GET' && parsedUrl.pathname === '/view-character') {
      if (!character) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'No character created yet' }));
        return;
      }

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(character));
    }

    // If route not found
    else {
      res.statusCode = 404;
      res.end();
    }
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = { server, resetCharacter };
