import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
    {
        // _id: { type: String, required: true },
        // name: { type: String, required: true },
        // number: { type: String, required: true },
        // startDate: Date,
        // endDate: Date,
        // department: String,
        // credits: Number,
        // description: String,
        // imagePath: String,
        // createdBy: String,
        number: { type: String, required: true},
        name: { type: String, required: true },
        startDate: String,
        endDate: String,
        department: String,
        credits: Number,
        description: String,
        enrolled: Boolean,
    },
    { collection: "courses" }
);
export default courseSchema;