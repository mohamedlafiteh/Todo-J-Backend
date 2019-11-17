const deleteTask = require('./deleteTask');

describe('deleteTask', () => {
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
  test('should delete task by id ', () => {
    const result = deleteTask(existingTasks, { id: 1 });

    expect(result).toEqual([
      {
        id: 2,
        title: 'Do laundry',
        completed: true
      }
    ]);
  });
});
