const app = require('./app');
const request = require('supertest');

describe('Test End Point Results', () => {
  test('Response to Get end point', () => {
    return request(app)
      .get('/tasks')
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});
