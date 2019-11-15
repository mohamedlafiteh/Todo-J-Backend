const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const data = require('./data');

app.use(cors());
app.use(bodyParser.json());

app.post('/tasks', (req, res) => {
  const newTask = req.body;
  const id = data.length + 1;

  const task = {
    id: id,
    title: newTask.title,
    completed: false
  };

  if ('title' in task) {
    data.push(newTask);
    res.status(201).send('created');
  } else {
    res.status(400).send('there is error in inserting data');
  }
});

app.get('/tasks', (req, res) => {
  res.status(200).send(data);
});

app.get('/tasks/:id', (req, res) => {
  const taskId = req.params.id;

  const filterTasks = data.find(data => {
    return data.id == taskId;
  });

  res.status(200).send(filterTasks);
});

app.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const task = req.body;

  const completed = task.completed;
  const updated = {
    id: taskId,
    title: task.title,
    completed: completed
  };

  if ('undefined' !== typeof updated['title'] && typeof (updated.completed == 'boolean')) {
    const taskIndex = data.findIndex(data => {
      return data.id == taskId;
    });

    data[taskIndex] = { ...data[taskIndex], ...req.body };
    res.status(200).send('updated');
  } else {
    res.status(400).send('There is error in updating data');
  }
});

app.patch('/tasks/:id', (req, res) => {
  const taskId = req.params.id;

  const taskIndex = data.findIndex(data => {
    return data.id == taskId;
  });

  data[taskIndex] = { ...data[taskIndex], ...req.body };
  res.status(200).send('task updated');
});

app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const task = data.find(data => {
    return data.id == taskId;
  });

  data.splice(data.indexOf(task), 1);
  res.status(204).send();
});

module.exports = app;
