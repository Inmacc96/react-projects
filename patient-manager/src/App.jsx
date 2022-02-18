import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientsList from "./components/PatientsList";

function App() {
  const [patients, setPatients] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Form patients={patients} setPatients={setPatients} />
        <PatientsList patients={patients} />
      </div>
    </div>
  );
}

export default App;
