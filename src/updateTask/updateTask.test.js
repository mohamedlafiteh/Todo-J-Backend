const updateTask = require('./updateTask');

describe('updateTask', () => {
  const existingTasks = [
    {
      id: 1,
      title: 'some title',
      completed: true
    }
  ];
  test('should update existing task', () => {
    const result = updateTask(existingTasks, { id: 1, title: 'new title', completed: false });
    expect(result).toEqual([
      {
        id: 1,
        title: 'new title',
        completed: false
      }
    ]);
  });

  test('should update the title when completed is missing', () => {
    expect(updateTask(existingTasks, { id: 1, title: 'another title' })).toEqual([
      {
        id: 1,
        title: 'another title',
        completed: true
      }
    ]);
  });

  test('should update the completed when title is not there', () => {
    expect(updateTask(existingTasks, { id: 1, completed: false })).toEqual([
      {
        id: 1,
        title: 'some title',
        completed: false
      }
    ]);
  });
});
