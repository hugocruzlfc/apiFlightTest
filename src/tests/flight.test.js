const supertest = require('supertest');
const { app, server } = require('../app');
const moongose = require('mongoose');

const api = supertest(app);

// const newTimeout = 30000;
// jest.setTimeout(newTimeout);

////Tests should not be done on the production data base

describe('GET - flight controller', () => {
  test('Testing the allFlights method', async () => {
    const response = await api.get('/flight/flights');

    expect(response).toBeDefined();
    //expect(response.statusCode).toBe(200);
    // expect(response?.rows.length).toBeGreaterThan(0);
  });
});

afterAll(() => {
  moongose.connection.close();
  server.close();
});
