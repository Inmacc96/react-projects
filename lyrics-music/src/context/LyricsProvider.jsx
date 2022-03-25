import { createContext } from "react";

const LyricsContext = createContext();

const LyricsProvider = ({ children }) => {
  return <LyricsContext.Provider value={{}}>{children}</LyricsContext.Provider>;
};

export { LyricsProvider };

export default LyricsContext;
