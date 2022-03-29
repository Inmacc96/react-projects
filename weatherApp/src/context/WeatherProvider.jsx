import { useState, createContext } from "react";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });

  const dataSearch = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.name });
  };

  return (
    <WeatherContext.Provider value={{ search, dataSearch }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };
export default WeatherContext;
