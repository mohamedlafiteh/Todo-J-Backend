const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const PORT = 3005;

app.listen(PORT, () => {
  console.log(`This server running on port ${PORT}`);
});

const {
  createTask,
  getTask,
  deleteTask,
  updateTask,
  getAllTasks,
  updateTaskPartially
} = require('./task-service');

app.post('/tasks', (req, res) => {
  const title = req.body.title;
  try {
    createTask(title);
    res.status(201).send('created');
  } catch (error) {
    res.status(400).send(error);
  }
});

app.put('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);

  const title = req.body.title;
  const completed = req.body.completed;
  try {
    updateTask(id, title, completed);
    res.status(200).send('updated');
  } catch (error) {
    res.status(400).send(error);
  }
});

app.patch('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const title = req.body.title;
  const completed = req.body.completed;

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
