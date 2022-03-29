import Form from "./Form";
import Result from "./Result";
import Spinner from "./Spinner";
import useWeather from "../hooks/useWeather";

const WeatherApp = () => {
  const { result, loading, notResult } = useWeather();

  return (
    <>
      <main className="two-cols">
        <Form />
        {loading ? (
          <Spinner />
        ) : result?.name ? (
          <Result />
        ) : notResult ? (
          <p>{notResult}</p>
        ) : (
          <p>El clima se va a mostrar aquí</p>
        )}
      </main>
    </>
  );
};

export default WeatherApp;
