const request = require('supertest');
const { server, resetCharacter } = require('../src/server'); // Adjust the path if necessary

afterAll(() => {
  // Close the server after tests are done
  server.close();
});

describe('POST /create-character', () => {
  it('should create a new character and return 201', async () => {
    const response = await request(server)
      .post('/create-character')
      .send({ characterClass: 'Warrior', gender: 'Male', funFact: 'Loves dragons' });
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Character created');
  });

  it('should return 400 if required fields are missing', async () => {
    const response = await request(server)
      .post('/create-character')
      .send({ characterClass: 'Mage' }); // Missing gender and funFact
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Missing required fields');
  });
});

describe('POST /confirm-character', () => {
  it('should confirm character creation', async () => {
    const response = await request(server).post('/confirm-character');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Character creation confirmed');
  });

  it('should return 400 if no character has been created', async () => {
    // Reset the character data (if applicable)
    resetCharacter();
    const response = await request(server).post('/confirm-character');
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('No character created yet');
  });
});

describe('GET /view-character', () => {
  it('should return the created character', async () => {
    // First, ensure a character is created
    const createResponse = await request(server)
      .post('/create-character')
      .send({ characterClass: 'Warrior', gender: 'Male', funFact: 'Loves dragons' });
    expect(createResponse.status).toBe(201); // Ensure character creation was successful

    // Now fetch the character details
    const response = await request(server).get('/view-character');
    expect(response.status).toBe(200);
    expect(response.body.characterClass).toBe('Warrior');
    expect(response.body.gender).toBe('Male');
    expect(response.body.funFact).toBe('Loves dragons');
  });

  it('should return 400 if no character has been created', async () => {
    // Reset the character data (if applicable)
    resetCharacter();
    const response = await request(server).get('/view-character');
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('No character created yet');
  });
});
