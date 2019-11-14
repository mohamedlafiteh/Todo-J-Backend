const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const data = require('./data');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/tasks', (req, res) => {
  const newTask = req.body;
  data.push(newTask);
  res.status(201).send('created');
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

  const taskIndex = data.findIndex(data => {
    return data.id == taskId;
  });

  data[taskIndex] = { ...data[taskIndex], ...req.body };
  res.status(200).send('updated');
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
