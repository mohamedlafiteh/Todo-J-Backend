const app = require('./app');
const request = require('supertest');

describe('Test POST end point results', () => {
  test('Response to the post end point', () => {
    return request(app)
      .post('/tasks')
      .then(response => {
        expect(response.status).toBe(201);
      });
  });
});
