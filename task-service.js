const data = require('./data');

const createTask = (title) => {
  if (!!title && title.length > 0) {
    const newTask = { id: data.length + 1, title, completed: false };
    data.push(newTask);
  } else {
    throw new Error('Title is required');
  }
};

const getAllTasks = () => data;

const updateTask = (id, title, completed) => {
  const updated = {
    id,
    title,
    completed,
  };

  if (typeof updated.title !== 'undefined' && typeof (updated.completed == 'boolean')) {
    const taskIndex = data.findIndex((d) => d.id == updated.id);

    if (taskIndex >= 0) {
      data.splice(taskIndex, 1, { ...data[taskIndex], ...updated });
    }
  } else {
    throw new Error('There is error in updating data');
  }
};

const deleteTask = (id) => {
  if (id !== 'undefined') {
    const task = data.findIndex((data) => data.id == id);

    data.splice(task, 1);
  } else {
    throw new Error('id is required');
  }
};

const getTask = (id) => data.find((data) => data.id == id);

const updateTaskPartially = (id, title, completed) => {
  const updated = {
    id,
    title,
    completed,
  };

  if (id > 0) {
    const taskIndex = data.findIndex((data) => data.id == id);

    data[taskIndex] = { ...data[taskIndex], ...updated };
  } else {
    throw new Error('There is error in updating task');
  }
};

module.exports = {
  createTask,
  getTask,
  deleteTask,
  updateTask,
  getAllTasks,
  updateTaskPartially,
};
