import useLyrics from "../hooks/useLyrics";

const Lyric = () => {
  const { lyric } = useLyrics();

  return <div className="lyric">{lyric}</div>;
};

export default Lyric;
