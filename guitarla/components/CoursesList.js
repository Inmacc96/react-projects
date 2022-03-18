import CoursesTypes from "./CoursesTypes";
import styles from '../styles/Courses.module.css'

const CoursesList = ({ courses }) => {
  return (
    <div>
      <h1 className="heading">Cursos</h1>
      <div className={styles.courses}>
        {courses.map((course) => (
          <CoursesTypes key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
