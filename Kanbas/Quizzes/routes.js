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
    const createQuiz = async (req, res) => {
        const newQuiz = req.body;
        const quiz = await dao.createQuiz(newQuiz);
        res.json(quiz);
    }
    const updateQuiz = async (req, res) => {
        const { qid } = req.params;
        const status = await dao.updateQuiz(qid, req.body);
        res.json(status);
    };


    app.get("/api/courses/:cid/quizzes", getAllQuizzes);
    app.delete("/api/quizzes/:qid", deleteQuiz);
    app.put("/api/quizzes/:qid/publish", updateQuizPublishStatus);
    app.post("/api/quizzes", createQuiz);
    app.put("/api/quizzes/:qid", updateQuiz);
}