import Form from "./Form";

const InsuranceApp = () => {
  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black">
          Cotizador de Seguros de Auto
        </h1>
      </header>

      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
        <Form />
      </main>
    </>
  );
};

export default InsuranceApp;
