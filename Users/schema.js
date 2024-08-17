import mongoose from "mongoose";
import courseSchema from "../Kanbas/Courses/schema.js";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    email: String,
    lastName: String,
    dob: Date,
    role: {
        type: String,
        enum: ["STUDENT", "FACULTY", "TA"],
        default: "USER",
    },
    loginId: String,
    section: String,
    lastActivity: Date,
    totalActivity: String,
    courses: [courseSchema]
},
    { collection: "users" }
);
export default userSchema;