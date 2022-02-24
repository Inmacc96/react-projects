import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatDate } from "../helpers";

import savingIcon from "../img/icono_ahorro.svg";
import houseIcon from "../img/icono_casa.svg";
import foodIcon from "../img/icono_comida.svg";
import miscellaneousExpensesIcon from "../img/icono_gastos.svg";
import leisureIcon from "../img/icono_ocio.svg";
import healthIcon from "../img/icono_salud.svg";
import subscriptionIcon from "../img/icono_suscripciones.svg";

const icons = {
  ahorro: savingIcon,
  house: houseIcon,
  comida: foodIcon,
  gastos: miscellaneousExpensesIcon,
  ocio: leisureIcon,
  salud: healthIcon,
  suscripciones: subscriptionIcon,
};

const Expenditure = ({ expenditure, setExpenditureEdit}) => {
  const { category, name, amount, id, date } = expenditure;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setExpenditureEdit(expenditure)}>Editar</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => console.log("Eliminar..")}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={icons[category]} alt="Icono gasto" />
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
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Expenditure;
