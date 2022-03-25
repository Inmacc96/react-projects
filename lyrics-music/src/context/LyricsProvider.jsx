import { useState, createContext } from "react";

const LyricsContext = createContext();

const LyricsProvider = ({ children }) => {
  const [alert, setAlert] = useState("");

  return (
    <LyricsContext.Provider value={{ alert, setAlert }}>
      {children}
    </LyricsContext.Provider>
  );
};

export { LyricsProvider };

export default LyricsContext;
