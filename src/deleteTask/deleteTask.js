const deleteTask = (taskList, taskId) => {
  const { id } = taskId;
  const deleteTaskById = taskList.filter(task => task.id !== id);

  return deleteTaskById;
};

module.exports = deleteTask;
