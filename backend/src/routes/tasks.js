const validateObjectId = require("../middleware/validateObjectId");
const express = require('express');
const router = express.Router();
const { Task, validate } = require("../models/task");

/**
 * # 전체 TASK LIST 반환
 */
router.get('/', async (req, res) => {
  const tasks = await Task.find()
    .select("-__v");

  res.send(tasks);
});

/**
 * # 입력한 ID 의 프로젝트에 해당하는 TASK LIST 반환
 */
router.get('/project/:id', validateObjectId, async (req, res) => {
  const tasks = await Task.find({ project_id: req.params.id })
    .select("-__v");

  res.send(tasks);
});

/**
 * # 입력한 ID 의 TASK 반환
 */
router.get('/:id', validateObjectId, async (req, res) => {
  const task = await Task.findById(req.params.id).select("-__v");

  if (!task)
    return res.status(404).send("The task with the given ID was not found.");

  res.send(task);
});

/**
 * # TASK 추가
 */
router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let task = new Task({ name: req.body.name, project_id: req.body.project_id });
  task = await task.save();

  res.send(task);
});


router.put("/:id", validateObjectId, async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { ...req.body },
    { new: true }
  );

  if (!task)
    return res.status(404).send("The task with the given ID was not found.");

  res.send(task);
});

router.delete("/:id", validateObjectId, async (req, res) => {
  const task = await Task.findByIdAndRemove(req.params.id);

  if (!task)
    return res.status(404).send("The task with the given ID was not found.");

  res.send(task);
});

module.exports = router;