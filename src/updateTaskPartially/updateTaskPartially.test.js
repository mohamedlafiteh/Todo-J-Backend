const updateTaskPartially = require('./updateTaskPartially');

describe('update task partially', () => {
  const existingTasks = [
    {
      id: 1,
      title: 'some title',
      completed: true
    }
  ];
  test('should update existing task', () => {
    const result = updateTaskPartially(existingTasks, {
      id: 1,
      title: 'new title',
      completed: false
    });
    expect(result).toEqual([
      {
        id: 1,
        title: 'new title',
        completed: false
      }
    ]);
  });
});
