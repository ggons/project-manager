const mongoose = require('mongoose');
const Joi = require('joi');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Number,
    required: true,
    enum: [0, 1, 2, 3, 4],  // ['New', 'In Progress', 'Completed', 'On Hold', 'Cancelled']
    default: 0
  },
  project_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

const Task = mongoose.model('Task', taskSchema);

function validateTask(task) {
  const schema = {
    name: Joi.string().min(2).max(30).required(),
    project_id: Joi.objectId().required()
  };

  return Joi.validate(task, schema);
}

exports.Task = Task;
exports.validate = validateTask;