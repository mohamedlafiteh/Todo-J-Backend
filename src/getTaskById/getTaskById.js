const getTaskById = (taskList, taskId) => {
  const { id } = taskId;
  const taskById = taskList.find(task => task.id === id);
  return taskById;
};

module.exports = getTaskById;
