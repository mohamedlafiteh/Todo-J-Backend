const createTask = (taskList, taskToUpdate) => {
  const createNewTsk = [...taskList, taskToUpdate];

  return createNewTsk;
};

module.exports = createTask;
