import WeatherApp from "./components/WeatherApp";
import { WeatherProvider } from "./context/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <WeatherApp />
    </WeatherProvider>
  );
}

export default App;
