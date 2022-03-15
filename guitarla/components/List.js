import Guitar from "./Guitar";

const List = ({ guitars }) => {
  return (
    <div>
      {guitars.map((guitar) => (
        <Guitar key={guitar.id} guitar={guitar} />
      ))}
    </div>
  );
};

export default List;
