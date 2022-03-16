import Guitar from "./Guitar";
import styles from "../styles/List.module.css";

const List = ({ guitars }) => {
  return (
    <>
      <h1 className="heading">Nuestra Colección</h1>
      <div className={styles.list}>
        {guitars.map((guitar) => (
          <Guitar key={guitar.id} guitar={guitar} />
        ))}
      </div>
    </>
  );
};

export default List;
