import Form from "./Form";
import Alert from "./Alert";
import useLyrics from "../hooks/useLyrics";

const LyricsApp = () => {
  const { alert } = useLyrics();

  return (
    <>
      <header>Búsqueda de Letras de Canciones</header>

      <Form />

      <main>
        {alert && <Alert>{alert}</Alert>}
      </main>
    </>
  );
};

export default LyricsApp;
