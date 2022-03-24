import Form from "./Form";
import useQuoter from "../hooks/useQuoter";

const InsuranceApp = () => {

  const {result} = useQuoter();

  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black">
          Cotizador de Seguros de Auto
        </h1>
      </header>

      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
        <Form />

        {result}
      </main>
    </>
  );
};

export default InsuranceApp;
