const {
  createTask,
  getTask,
  deleteTask,
  updateTask,
  getAllTasks,
  updateTaskPartially,
} = require('./task-service');

const data = require('./data');

describe('Task service', () => {
  test('Create a new task', () => {
    createTask('new task title');
    expect(data.length).toEqual(3);
    expect(data[2]).toEqual({
      id: 3,
      title: 'new task title',
      completed: false,
    });
  });
});

describe('Task service', () => {
  test('Update task', () => {
    updateTask(1, 'update title', false);
    expect(data[0]).toEqual({
      id: 1,
      title: 'update title',
      completed: false,
    });
  });
});

describe('Task service', () => {
  test('Update task partially', () => {
    updateTaskPartially(1, 'update only title', false);
    expect(data[0]).toEqual({
      id: 1,
      title: 'update only title',
      completed: false,
    });
  });
});

describe('Task service', () => {
  test('Get task by id', () => {
    getTask();
    expect(data.length).toEqual(3);
  });
});

describe('Task service', () => {
  test('Get tasks', () => {
    getAllTasks();
    expect(data.length).toEqual(3);
  });
});

describe('Task service', () => {
  test('Delete task by id', () => {
    deleteTask(1);
    expect(data.length - 1).toEqual(1);
  });
});
