const getTask = require('./getTasks');

describe('get tasks', () => {
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
  test('should get all tasks', () => {
    const result = getTask(existingTasks);
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
      }
    ]);
  });
});
