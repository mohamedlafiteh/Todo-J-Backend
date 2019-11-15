const app = require('./app');
const request = require('supertest');
const data = require('./data');

describe('Test POST End Point status', () => {
  test('No data should return an error', () => {
    return request(app)
      .post('/tasks')
      .then(response => {
        expect(response.status).not.toBe(201);
      });
  });

  test('Test request should return 201 Response to POST end point', () => {
    return request(app)
      .post('/tasks')
      .send({ title: 'passing test' })
      .then(response => {
        expect(response.status).toBe(201);
        expect(response.text).toEqual('created');
      });
  });
});

describe('Test GET end point data response and status', () => {
  test('Test request should return the Data status 200 Response to GET end point', () => {
    return request(app)
      .get('/tasks')
      .then(response => {
        expect(response.status).toBe(200);
        expect(JSON.parse(response.text)).toEqual(data);
      });
  });
});

describe('Test PUT end point status', () => {
  test('No data should return an error', () => {
    return request(app)
      .put('/tasks/:id')
      .then(response => {
        expect(response.status).not.toBe(200);
      });
  });

  test('Test request should return 200 Response to PUT end point', () => {
    return request(app)
      .put('/tasks/:id')
      .send({ title: 'passing test', completed: false })
      .then(response => {
        expect(response.status).toBe(200);
        expect(response.text).toEqual('updated');
      });
  });
});

describe('Test DELETE end point status', () => {
  test('Test request should return 204 Response to DELETE end point', () => {
    return request(app)
      .delete('/tasks/:id')
      .then(response => {
        expect(response.statusCode).toBe(204);
        expect(response.text).toEqual('');
      });
  });
});

describe('Test GET task by id End Point status', () => {
  test('Test request should return 200 Response to GET end point ', () => {
    return request(app)
      .get('/tasks/:id')
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe('Test PATCH  update task by id End Point status and text', () => {
  test('Test request should return 200 Response to PATCH end point', () => {
    return request(app)
      .patch('/tasks/:id')
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.text).toEqual('task updated');
      });
  });
});
