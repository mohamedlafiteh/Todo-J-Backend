const app = require('./app');
const request = require('supertest');
const data = require('./data');

describe('Test POST End Point status', () => {
  test('Response to POST end point', () => {
    return request(app)
      .post('/tasks')
      .then(response => {
        expect(response.status).toBe(201);
        expect(response.text).toEqual('created');
      });
  });
});

describe('Test GET End Point status', () => {
  test('Response to GET end point', () => {
    return request(app)
      .get('/tasks')
      .then(response => {
        expect(response.status).toBe(200);
      });
  });
});

describe('Test GET end point data response', () => {
  test('Response to GET end point', () => {
    return request(app)
      .get('/tasks')
      .then(response => {
        expect(JSON.parse(response.text)).toEqual(data);
      });
  });
});

describe('Test update task by id End Point Results', () => {
  test('Response to PUT end point', () => {
    return request(app)
      .put('/tasks/:id')
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.text).toEqual('updated');
      });
  });
});

describe('Test DELETE End Point Results', () => {
  test('Response to DELETE end point', () => {
    return request(app)
      .delete('/tasks/:id')
      .then(response => {
        expect(response.statusCode).toBe(204);
        expect(response.text).toEqual('');
      });
  });
});

describe('Test GET task by id End Point Results', () => {
  test('Response to Get:id end point', () => {
    return request(app)
      .get('/tasks/:id')
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe('Test PATCH task by id End Point Results', () => {
  test('Response to PATCH:id end point', () => {
    return request(app)
      .patch('/tasks/:id')
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.text).toEqual('task updated');
      });
  });
});
