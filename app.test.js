const app = require('./app');
const request = require('supertest');
const data = require('./data');

describe('Test post End Point status', () => {
  test('Response to Get end point', () => {
    return request(app)
      .post('/tasks')
      .then(response => {
        expect(response.status).toBe(201);
      });
  });
});

describe('Test get End Point status', () => {
  test('Response to Get end point', () => {
    return request(app)
      .get('/tasks')
      .then(response => {
        expect(response.status).toBe(200);
      });
  });
});

describe('Test End Point data response', () => {
  test('Response to Get end point', () => {
    return request(app)
      .get('/tasks')
      .then(response => {
        expect(JSON.parse(response.text)).toEqual(data);
      });
  });
});

describe('Test update task by id End Point Results', () => {
  test('Response to put end point', () => {
    return request(app)
      .put('/tasks/:id')
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});
describe('Test DELETE End Point Results', () => {
  test('Response to DELETE end point', () => {
    return request(app)
      .delete('/tasks/:id')
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});
