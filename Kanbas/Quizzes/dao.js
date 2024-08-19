import quizModel from "./model.js";
export const getAllQuizzes = (cid) => quizModel.find({ course: cid });
export const deleteQuiz = (id) => quizModel.deleteOne({ _id: id });
export const updateQuizPublishStatus = (id) =>
    quizModel.findById(id).then(quiz => {
        quiz.published = !quiz.published;
        return quiz.save();
    });
export const createQuiz = (quiz) => quizModel.create(quiz);
export const updateQuiz = (id, quiz) =>quizModel.updateOne({_id: id}, {$set: quiz});