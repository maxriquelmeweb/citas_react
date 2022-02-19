import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLocalStorage = () => {
      const pacientesLocalStorage = JSON.parse(localStorage.getItem("pacientes"));
      setPacientes(pacientesLocalStorage);
    }
    obtenerLocalStorage();
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = id => {
    setPacientes(pacientes.filter(pacienteState => pacienteState.id != id));
  }

  return (
    <div className="container mx-auto mt-20">
      <Header

      />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}
export default App
