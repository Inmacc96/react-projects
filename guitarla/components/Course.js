const Course = ({ course }) => {
  const { title, content, image } = course;
  return (
    <section>
      <div className="contenedor">
        <div>
          <h2>{title}</h2>
          <p>{content}</p>
          <a href="#">Más Información</a>
        </div>
      </div>
    </section>
  );
};

export default Course;
