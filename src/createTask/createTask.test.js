const createTask = require('./createTask');

describe('createTask', () => {
  const existingTasks = [
    {
      id: 1,
      title: 'Buy groceries',
      completed: false
    },
    {
      id: 2,
      title: 'Do laundry',
      completed: true
    }
  ];
  test('should create a new task', () => {
    const result = createTask(existingTasks, { id: 3, title: 'new title', completed: false });

    expect(result).toEqual([
      {
        id: 1,
        title: 'Buy groceries',
        completed: false
      },
      {
        id: 2,
        title: 'Do laundry',
        completed: true
      },
      { id: 3, title: 'new title', completed: false }
    ]);
  });
});
