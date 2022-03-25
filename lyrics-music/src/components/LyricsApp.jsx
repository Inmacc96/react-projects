import Form from "./Form";
import Alert from "./Alert";
import Lyric from "./Lyric";
import Spinner from "./Spinner";
import useLyrics from "../hooks/useLyrics";

const LyricsApp = () => {
  const { alert, lyric, loading } = useLyrics();

  return (
    <>
      <header>Búsqueda de Letras de Canciones</header>

      <Form />

      <main>
        {alert ? (
          <Alert>{alert}</Alert>
        ) : loading ? (
          <Spinner />
        ) : lyric ? (
          <Lyric />
        ) : (
          <p className="text-center">
            Busca las letras de tus artistas favoritos
          </p>
        )}
      </main>
    </>
  );
};

export default LyricsApp;
