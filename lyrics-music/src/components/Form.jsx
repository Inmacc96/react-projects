import { useState } from "react";

const Form = () => {
  const [search, setSearch] = useState({
    artist: "",
    song: "",
  });

  return (
    <form>
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
