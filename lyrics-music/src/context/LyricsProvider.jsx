import { useState, createContext } from "react";
import axios from "axios";

const LyricsContext = createContext();

const LyricsProvider = ({ children }) => {
  const [alert, setAlert] = useState("");
  const [lyric, setLyric] = useState("");

  const lyricsSearch = async (search) => {
    try {
      const { artist, song } = search;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const { data } = await axios(url);
      setLyric(data.lyrics);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LyricsContext.Provider value={{ alert, setAlert, lyricsSearch }}>
      {children}
    </LyricsContext.Provider>
  );
};

export { LyricsProvider };

export default LyricsContext;
