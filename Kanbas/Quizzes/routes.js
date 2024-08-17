import * as dao from "./dao.js";
export default function QuizRoutes(app) {
    const getAllQuizzes = async (req, res) => {
        const { cid } = req.params;
        const quizzes = await dao.getAllQuizzes(cid);
        res.json(quizzes);
    };
    const deleteQuiz = async (req, res) => {
        const { qid } = req.params;
        const status = await dao.deleteQuiz(qid);
        res.json(status);
    }
    const updateQuizPublishStatus = async (req, res) => {
        const { qid } = req.params;
        const status = await dao.updateQuizPublishStatus(qid);
        res.json(status);
    }


    app.get("/api/courses/:cid/quizzes", getAllQuizzes);
    app.delete("/api/quizzes/:qid", deleteQuiz);
    app.put("/api/quizzes/:qid/publish", updateQuizPublishStatus);
}