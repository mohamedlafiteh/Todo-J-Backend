const getTaskById = require('./getTaskById');

describe('get task by id', () => {
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
  test('should get task by id ', () => {
    const result = getTaskById(existingTasks, { id: 1 });
    expect(result).toEqual({
      id: 1,
      title: 'Buy groceries',
      completed: false
    });
  });
});
