import { useState, createContext } from "react";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {


  return (
    <WeatherContext.Provider value={{ }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };
export default WeatherContext;
