import { LyricsProvider } from "./context/LyricsProvider";
import LyricsApp from "./components/LyricsApp";

function App() {
  return (
    <LyricsProvider>
      <LyricsApp />
    </LyricsProvider>
  );
}

export default App;
