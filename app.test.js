const app = require('./app');
const request = require('supertest');
const data = require('./data');

describe('Test End Point status', () => {
  test('Response to Get end point', () => {
    return request(app)
      .get('/tasks')
      .then(response => {
        expect(response.statusCode).toBe(200);
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
