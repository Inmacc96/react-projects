import { useState } from "react";
import useWeather from "../hooks/useWeather";

const Form = () => {
  const [alert, setAlert] = useState("");
  const { search, dataSearch, consultWeather } = useWeather();
  const { city, country } = search;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return
    }
    setAlert('')
    consultWeather(search)
  };

  return (
    <div className="container">
        {alert && <p>{alert}</p>}
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="city">Ciudad</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={dataSearch} // Análogo a (e) => dataSearch(e), ya que cuando se ejecuta el evento lo pasa a la función dataSearch
            value={city}
          />
        </div>
        <div className="field">
          <label htmlFor="country">País</label>
          <select
            id="country"
            name="country"
            onChange={(e) => dataSearch(e)}
            value={country}
          >
            <option value="">Seleccione un país</option>
            <option value="US">Estados Unidos</option>
            <option value="ES">España</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CR">Costa Rica</option>
            <option value="FR">Francia</option>
            <option value="IT">Italia</option>
            <option value="GB">Reino Unido</option>
            <option value="DE">Alemania</option>
          </select>
        </div>

        <input type="submit" value="consultar clima" />
      </form>
    </div>
  );
};

export default Form;
