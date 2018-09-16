const validateObjectId = require("../middleware/validateObjectId");
const express = require('express');
const router = express.Router();
const { Project, validate } = require("../models/project");

router.get('/', async (req, res) => {
  const projects = await Project.find()
    .select("-__v");

  res.send(projects);
});

router.get('/:id', validateObjectId, async (req, res) => {
  const project = await Project.findById(req.params.id).select("-__v");

  if (!project)
    return res.status(404).send("The project with the given ID was not found.");

  res.send(project);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let project = new Project({ name: req.body.name });
  project = await project.save();

  res.send(project);
});

module.exports = router;