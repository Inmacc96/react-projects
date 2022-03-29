import { useState, createContext } from "react";
import axios from "axios";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });
  const [result, setResult] = useState({});

  const dataSearch = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const consultWeather = async (data) => {
    try {
      const { city, country } = data;

      const appId = import.meta.env.VITE_API_KEY;

      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`;

      const { data: latlon } = await axios(url);
      const { lat, lon } = latlon[0];

      const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;

      const { data: weather } = await axios(urlWeather);

      setResult(weather);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ search, dataSearch, consultWeather, result }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };
export default WeatherContext;
