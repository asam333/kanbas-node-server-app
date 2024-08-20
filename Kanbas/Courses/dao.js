import courseModel from "./model.js";
export const getAllCourses = () => courseModel.find();

export const createCourse = (course) => {
    return courseModel.create(course);
};

export const deleteCourse = (courseId) => courseModel.deleteOne({ _id: courseId });

export const updateCourse = (courseId, course) =>
    courseModel.updateOne({ _id: courseId }, { $set: course });

export const findCourseById = (courseId) => courseModel.findById(courseId);