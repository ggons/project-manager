const express = require('express');
const error = require('../middleware/error');
const projects = require('../routes/projects');
const tasks = require('../routes/tasks');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/projects', projects);
  app.use('/api/tasks', tasks);  
  app.use(error);
}