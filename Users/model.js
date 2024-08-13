import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("UserModel", schema); //unique identifier and schema
export default model;