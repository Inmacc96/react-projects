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

      <style jsx>
        {`
          section {
            padding: 10rem 0;
            margin-top: 10rem;
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 /0.65),
                rgb(0 0 0 / 0.7)
              ),
              url(${image.url});
            background-size: cover;
            background-position: 50%;
          }
        `}
      </style>
    </section>
  );
};

export default Course;
