import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    name: { type: String, required: true },
    course: { type: String, required: true },
    availableFrom: Date,
    availableUntil: Date,
    dueDate: Date,
    noq: Number,
    points: Number,
    published: Boolean,

    quizType: String,
    assignmentGroup: String,
    shuffleAnswers: Boolean,
    timeLimit: Boolean,
    timeLimitEntry: Number,
    allowMultipleAttempts: Boolean,
    MultipleAttempts:Number,
    showCorrectedAnswers: Boolean,
    accessCode: Boolean,
    accessCodeEntry: Number,
    oneQuestionAtATime: Boolean,
    webCamRequired: Boolean,
    lockQuestionsAfterAnswering: Boolean,

},
    { collection: "quizzes" }
);
export default quizSchema;