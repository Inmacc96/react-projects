import { formatDate } from "../helpers";

const Expenditure = ({ expenditure }) => {
  const { category, name, amount, id, date } = expenditure;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        {/* Imagen */}
        <div className="descripcion-gasto">
          <p className="categoria">{category}</p>
          <p className="nombre-gasto">{name}</p>
          <p className="fecha-gasto">
            Agregado el: {""}
            <span>{formatDate(date)}</span>
          </p>
        </div>
      </div>

      <p className="cantidad-gasto">${amount}</p>
    </div>
  );
};

export default Expenditure;
