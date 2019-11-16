const data = require('./data');

const createTask = title => {
  if (!!title && title.length > 0) {
    const newTask = { id: data.length + 1, title: title, completed: false };
    data.push(newTask);
  } else {
    throw 'Title is required';
  }
};

const getAllTasks = () => {
  return data;
};

const updateTask = (title, completed, id) => {
  const updated = {
    id: id,
    title: title,
    completed: completed
  };

  if (typeof updated['title'] !== 'undefined' && typeof (updated.completed == 'boolean')) {
    const taskIndex = data.findIndex(data => {
      data.id == updated.id;
    });
    data[taskIndex] = { ...data[taskIndex], ...req.body };
  } else {
    throw 'There is error in updating data';
  }
};

const deleteTask = id => {
  if (id !== 'undefined') {
    const task = data.find(data => {
      data.id == id;
    });

    data.splice(data.indexOf(task), 1);
  } else {
    throw 'id is required';
  }
};

const getTask = id => {
  return data.find(data => {
    return data.id == id;
  });
};

const updateTaskPartially = id => {
  if (id > 0) {
    const taskIndex = data.findIndex(data => {
      data.id == id;
    });

    data[taskIndex] = { ...data[taskIndex], ...req.body };
  } else {
    throw 'There is error in updating task';
  }
};

module.exports = {
  createTask,
  getTask,
  deleteTask,
  updateTask,
  getAllTasks,
  updateTaskPartially
};
