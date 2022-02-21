import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientsList from "./components/PatientsList";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getLS = () => {
      const patientsLS = JSON.parse(localStorage.getItem("patients")) ?? []; // Si no existe la clave patients, entonces []
      setPatients(patientsLS);
    };

    getLS();
  }, []); // Sólo se ejecuta una vez. Cuando el componente esté listo, entonces comprueba si hay algo en el localStorage

  useEffect(() => {
    const setLS = () => {
      localStorage.setItem("patients", JSON.stringify(patients));
    };

    setLS();
  }, [patients]);

  const deletePatient = (id) => {
    const updatePatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatePatients);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientsList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
