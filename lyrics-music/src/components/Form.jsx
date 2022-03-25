import { useState } from "react";
import useLyrics from "../hooks/useLyrics";

const Form = () => {
  const [search, setSearch] = useState({
    artist: "",
    song: "",
  });

  const { setAlert, lyricsSearch } = useLyrics();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      setAlert("Coloca nombre de artista y canción");
      return;
    }
    lyricsSearch(search);
    setAlert("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Busca por Artistas y Canción</legend>

      <div className="form-grid">
        <div>
          <label>Artista</label>
          <input
            type="text"
            name="artist"
            placeholder="Nombre Artista"
            value={search.artist}
            onChange={(e) =>
              setSearch({ ...search, [e.target.name]: e.target.value })
            }
          />
        </div>

        <div>
          <label>Canción</label>
          <input
            type="text"
            name="song"
            placeholder="Nombre Canción"
            value={search.song}
            onChange={(e) =>
              setSearch({ ...search, [e.target.name]: e.target.value })
            }
          />
        </div>
        <input type="submit" value="Buscar" />
      </div>
    </form>
  );
};

export default Form;
