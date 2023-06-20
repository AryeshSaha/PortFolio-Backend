const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    Stack: [{ type: String }],
    description: {
      type: String,
      default: "Add a Description",
    },
    images: [{ type: String }],
    link: String,
    author: {
      type: mongoose.Schema.Types.ObjectID,
      ref: "Admin",
    },
    collaborators: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const Projects = mongoose.model("Projects", ProjectSchema);

module.exports = Projects;
