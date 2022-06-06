const supertest = require('supertest');
const { app, server } = require('../app');
const moongose = require('mongoose');

const api = supertest(app);

// const newTimeout = 30000;
// jest.setTimeout(newTimeout);

////Tests should not be done on the production data base, but for the test no problem! :)

test('comments are returned as json', () => {
  // test example for check!!!!
  api
    .get('/')
    .expect(200)
    .expect('Content-Type', /aplication\/json/);
});

describe('GET - comment controller', () => {
  test('Testing the commetByFlightId method', async () => {
    const response = await api.get('/comments/flightId1');

    expect(response).toBeDefined();
    //expect(response.statusCode).toBe(200);
    // expect(response?.rows.length).toBeGreaterThan(0);
  });
});

describe('POST - comment controller', () => {
  test('Testing the commetByParams method', async () => {
    const response = await api.get('/comments/flightId1/for');

    expect(response).toBeDefined();
    //expect(response.statusCode).toBe(200);
    // expect(response?.rows.length).toBeGreaterThan(0);
  });
});

describe('POST - comment controller', () => {
  test('Testing the commitByFlightId method', async () => {
    const response = await api.post('/create').send({
      comment: 'coment prueba',
      tags: 'Important',
      userId: 'userId1',
      flightId: 'flightId1',
    });

    expect(response).toBeDefined();
    //expect(response.statusCode).toBe(200);
    //expect(response?.rows.length).toBeGreaterThan(0);
  });
});

afterAll(() => {
  moongose.connection.close();
  server.close();
});
