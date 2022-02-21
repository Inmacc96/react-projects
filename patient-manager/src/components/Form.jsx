import { useState, useEffect } from "react";
import Error from "./Error";

function Form({ patients, setPatients, patient, setPatient }) {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDate(patient.date);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);

    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene la opción por defecto y lo validas antes de enviar el formulario

    // Validation Form
    if ([name, owner, email, date, symptoms].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    // Patient Object
    const patientObject = {
      name,
      owner,
      email,
      date,
      symptoms,
    };

    // Check whether we are editing or creating a new record.
    if (patient.id) {
      // Editing record
      patientObject.id = patient.id;

      const updatePatients = patients.map((patientState) =>
        patientState.id === patient.id ? patientObject : patientState
      );

      setPatients(updatePatients);
      setPatient({});
    } else {
      // New record
      (patientObject.id = generateId()),
        setPatients([...patients, patientObject]);
      // Gracias a este método inmutable(hace una copia de patients), le
      // añadimos el objeto del paciente y el modificador setPatients se
      // encarga de actualizar el estado patients
    }

    // Reset form
    setName("");
    setOwner("");
    setEmail("");
    setDate("");
    setSymptoms("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Adminístralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {/* {error && <Error message='Todos los campos son obligatorios' />} */}
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="petname"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>

          <input
            id="petname"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="ownername"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>

          <input
            id="ownername"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="medicalDiscarge"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>

          <input
            id="medicalDiscarge"
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>

          <textarea
            id="symptoms"
            className="border-2 w-full p-2 mt-2 rounded-md"
            placeholder="Describe los Síntomas"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={patient.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
}

export default Form;
