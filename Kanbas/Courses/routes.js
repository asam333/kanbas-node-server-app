import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const getAllCourses = async (req, res) => {
    const courses = await dao.getAllCourses();
    res.json(courses);
  };

  const createCourse = async (req, res) => {
    try {
      const { userid, ...courseData } = req.body;

      // Log the userid for debugging purposes
      console.log("userid", userid);

      // Check if course ID is already in the database
      if (await dao.findCourseById(courseData._id)) {
        return res.status(400).json({ message: "Course ID already taken" });
      }

      // Add the creator's ID to the course data
      const course = await dao.createCourse({
        ...courseData,
        createdBy: userid  // Set the createdBy field to the user's ID
      });

      res.json(course);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const deleteCourse = async (req, res) => {
    const { courseId } = req.params;
    const status = await dao.deleteCourse(courseId);
    res.json(status);
  };

  const updateCourse = async (req, res) => {
    const { courseId } = req.params;
    const status = await dao.updateCourse(courseId, req.body);
    res.json(status);
  };
  // might not needed ...
  const findCourseById = async (req, res) => {
    const { courseId } = req.params;
    const course = await dao.findCourseById(courseId);
    res.json(course);
  };

  app.get("/api/courses", getAllCourses);
  app.post("/api/courses", createCourse);
  app.delete("/api/courses/:courseId", deleteCourse);
  app.put("/api/courses/:courseId", updateCourse);
  app.get("/api/courses/:courseId", findCourseById);
}