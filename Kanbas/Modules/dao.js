import moduleModel from "./model.js";
export const getAllModules = (cid) => moduleModel.find({ course: cid });
export const createModule = (module) => {
    delete module._id;
    return moduleModel.create(module);
};
export const deleteModule = (moduleId) => moduleModel.deleteOne({ _id: moduleId });
export const updateModule = (moduleId, module) =>
    moduleModel.updateOne({ _id: moduleId }, { $set: module });