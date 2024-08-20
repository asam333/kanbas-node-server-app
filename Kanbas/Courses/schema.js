import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
    {
        number: { type: String, required: true },
        name: String,
        startDate: String,
        endDate: String,
        department: String,
        credits: Number,
        description: String,
        image: String,
        faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    },
    { collection: "courses" }
);
export default courseSchema;