import * as dao from "../Kanbas/Modules/dao.js";
export default function ModuleRoutes(app) {
    const createModule = async (req, res) => {
        const module = await dao.createModule(req.body);
        res.json(module);
    };

    const deleteModule = async (req, res) => {
        const status = await dao.deleteModule(req.params.moduleId);
        res.json(status);
    };

    const findAllModules = async (req, res) => {
        const modules = await dao.findAllModules();
        res.json(modules);
    };

    const findModuleById = async (req, res) => {
        const moduleId = req.params.moduleId;
        const module = await dao.findModuleById(moduleId);
        res.json(module);
    };

    const findModuleByCourse = async (req, res) => {
        const course = req.params.course;
        const module = await dao.findModuleByCourse(course);
        res.json(module);
    }
    const updateModule = async (req, res) => {
        const moduleId = req.params.moduleId;
        const updatedModule = await dao.updateCourse(moduleId, req.body);
        res.json(updatedModule);
    }

    app.post('/api/modules', createModule);
    app.get('/api/modules', findAllModules);
    app.get('/api/modules/:moduleId', findModuleById);
    app.delete('/api/modules/:moduleId', deleteModule);
    app.put('/api/modules/:moduleId',updateModule);


}