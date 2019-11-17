const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const data = require('./data');
const updateTask = require('./src/updateTask/updateTask');
const createTask = require('./src/createTask/createTask');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = 3005;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`This server running on port ${PORT}`);
});

const { getTask, deleteTask, getAllTasks, updateTaskPartially } = require('./task-service');

app.post('/tasks', (req, res) => {
  const { id, title, completed } = req.body;
  try {
    const createNewTask = createTask(data, { id, title, completed });
    res.status(201).json(createNewTask);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.put('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);

  const { title, completed } = req.body;
  try {
    const updatedTaskList = updateTask(data, { id, title, completed });
    res.status(200).json(updatedTaskList);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.patch('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const { title } = req.body;
  const { completed } = req.body;

  try {
    updateTaskPartially(id, title, completed);
    res.status(200).send('Task updated');
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);

  try {
    deleteTask(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  }
});
app.get('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  try {
    const task = getTask(id);

    res.status(200).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/tasks', (req, res) => {
  try {
    const tasks = getAllTasks();

    res.status(200).send(tasks);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = app;
