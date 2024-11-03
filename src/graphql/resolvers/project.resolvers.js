const { projectModel } = require("../../db");
const checkAuth = require("../../utils/checkAuth");

const projectResolvers = {
  projects: async (args, context) => {
    const projects = await projectModel.findAll({ raw: true });
    return projects;
  },
  project: async (args, context) => {
    const project = await projectModel.findAll({
      where: {
        id: args.id,
      },
      raw: true,
    });
    return project;
  },
  newProject: async (args, context) => {
    const currentUser = await checkAuth(context);

    const { title, info, description } = args;

    const newProject = new projectModel({
      title,
      slug: title.replace(/\s|_|\./g, "-"),
      info,
      description,
      phone: currentUser.phone,
      creator: currentUser.id,
    });
    await newProject.save();

    return newProject;
  },
};

module.exports = projectResolvers;
