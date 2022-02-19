import { useEffect } from "react";



const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    const { nombre, email, fecha, sintomas, id } = paciente;
    const handleEliminar = () => {
        const respuesta = confirm("Deseas Eliminar a " + nombre)
        if (respuesta) {
            eliminarPaciente(id);
        }
    }
    return (
        <div className="mx-5 mb-2 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">fecha alta: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="flex justify-between">
                <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-xl"
                    type="button"
                    onClick={() => setPaciente(paciente)}
                >Editar</button>
                <button className="py-2 px-10 bg-red-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-xl"
                    type="button"
                    onClick={() => handleEliminar()}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente