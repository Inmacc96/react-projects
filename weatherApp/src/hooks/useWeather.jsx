import { useContext } from "react";
import WeatherContext from "../context/WeatherProvider";

const useWeather = () => {
  return useContext(WeatherContext);
};

export default useWeather;
