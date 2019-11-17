const updateTask = (taskList, taskToUpdate) => {
  const { id } = taskToUpdate;

  const updatedTaskList = taskList.map(task => {
    return task.id === id
      ? {
          ...task,
          ...taskToUpdate
        }
      : task;
  });

  return updatedTaskList;
};

module.exports = updateTask;
