import { useContext } from "react";
import LyricsContext from "../context/LyricsProvider";

const useLyrics = () => {
  return useContext(LyricsContext);
};

export default useLyrics;
