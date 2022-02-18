import Patient from "./Patient";

function PatientsList({ patients }) {
  console.log(patients);
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      {patients.map((patient) => (
        <Patient patient={patient} />
      ))}
    </div>
  );
}

export default PatientsList;
