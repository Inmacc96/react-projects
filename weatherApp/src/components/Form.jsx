const Form = () => {
  return (
    <div className="container">
      <form>
        <div className="field">
          <label htmlFor="city">Ciudad</label>
          <input type="text" id="city" name="city" />
        </div>
        <div className="field">
          <label htmlFor="country">País</label>
          <select id="country" name="country">
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
