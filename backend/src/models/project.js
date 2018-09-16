const mongoose = require('mongoose');
const Joi = require('joi');

const projectSchema = new mongoose.Schema({
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
  status: {
    type: Number,
    required: true,
    enum: [0, 1, 2, 3, 4],  // ['New', 'In Progress', 'Completed', 'On Hold', 'Cancelled']
    default: 0
  }
});

const Project = mongoose.model('Project', projectSchema);

function validateProject(project) {
  const schema = {
    name: Joi.string().min(2).max(30).required()
  }

  return Joi.validate(project, schema);
}

exports.Project = Project;
exports.validate = validateProject;