import useLyrics from "../hooks/useLyrics";
import Spinner from "./Spinner";

const Lyric = () => {
  const { lyric } = useLyrics();

  return <div className="lyric">{lyric}</div>;
};

export default Lyric;
