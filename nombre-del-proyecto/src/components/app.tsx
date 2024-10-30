import React from 'react';

const App: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex">
      {/* Barra lateral */}
      <div className="fixed top-0 left-0 w-1/5 h-screen p-4 text-white bg-yellow-500 shadow-lg">
        <ul className="space-y-4 font-bold">
          {["Usuarios", "Nueva Materia", "Matricular Materia", "Asignar Materia", "Generar Informe", "Alumnos por Materia", "Alumno", "Calificaciones", "Grupo Diurno", "Grupo Nocturno", "Misión y Visión", "Acerca de", "Cerrar Sesión"].map((item, index) => (
            <li key={index} className="p-2 rounded cursor-pointer hover:bg-yellow-600">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Contenido principal */}
      <div className="flex-grow p-8 ml-1/5">
        {/* Barra superior */}
        <div className="flex items-center justify-between p-4 mb-4 text-white bg-blue-700 rounded-lg">
          <h1 className="text-lg font-bold">Informe de Alumnos por Materia</h1>
          <button
            onClick={handlePrint}
            className="px-3 py-1 font-bold text-black bg-yellow-500 rounded hover:bg-yellow-600"
          >
            Imprimir
          </button>
        </div>

        {/* Informe de Alumnos por Materia */}
        <div className="p-4 mb-8 bg-white rounded-lg shadow">
          <h2 className="font-bold text-blue-700">Docente: Juan Jose Concha Trujillo</h2>
          <p>Materia: Electiva 5</p>
          <p>Año: 2024</p>
          <table className="w-full mt-4 border border-collapse border-gray-300">
            <thead>
              <tr className="text-white bg-blue-700">
                <th className="p-2">#</th>
                <th className="p-2">Código</th>
                <th className="p-2">Nombres y Apellidos</th>
                <th className="p-2">Corte 1</th>
                <th className="p-2">Corte 2</th>
                <th className="p-2">Corte 3</th>
                <th className="p-2">Nota Final</th>
                <th className="p-2">Habilitación</th>
                <th className="p-2">Faltas</th>
              </tr>
            </thead>
            <tbody>
              {/* Filas de ejemplo */}
              <tr className="bg-gray-100">
                <td className="p-2">1</td>
                <td className="p-2">6789012345</td>
                <td className="p-2">Juan Andrés Pérez Gómez</td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
              </tr>
              <tr className="bg-white">
                <td className="p-2">2</td>
                <td className="p-2">1478523698</td>
                <td className="p-2">María Laura Rodríguez López</td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Informe de Alumno */}
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="font-bold text-blue-700">Informe de Alumno</h2>
          <p>Docente Líder: Juan Camilo Majin Campo</p>
          <p>Estudiante: Cristian Manuel Jaramillo Díaz</p>
          <p>Carrera: Ingeniería Informática</p>
          <p>Código: 90117725</p>
          <p>Año: 2024</p>
          <table className="w-full mt-4 border border-collapse border-gray-300">
            <thead>
              <tr className="text-white bg-blue-700">
                <th className="p-2">#</th>
                <th className="p-2">Materia</th>
                <th className="p-2">Corte 1</th>
                <th className="p-2">Corte 2</th>
                <th className="p-2">Corte 3</th>
                <th className="p-2">Nota Final</th>
                <th className="p-2">Faltas</th>
              </tr>
            </thead>
            <tbody>
              {/* Filas de ejemplo */}
              <tr className="bg-gray-100">
                <td className="p-2">1</td>
                <td className="p-2">Matemáticas Generales</td>
                <td className="p-2">3</td>
                <td className="p-2">3</td>
                <td className="p-2">3</td>
                <td className="p-2">3</td>
                <td className="p-2">4</td>
              </tr>
              <tr className="bg-white">
                <td className="p-2">2</td>
                <td className="p-2">Lectiva 5</td>
                <td className="p-2">3</td>
                <td className="p-2">3</td>
                <td className="p-2">3</td>
                <td className="p-2">3</td>
                <td className="p-2">2</td>
              </tr>
            </tbody>
          </table>
          <div className="p-4 mt-4 bg-gray-100 border border-gray-300 rounded">
            <h3 className="font-bold">Comentario sobre el rendimiento:</h3>
            <p>El alumno presenta un promedio de 3.3, lo cual, aunque supera el mínimo requerido para aprobar, puede considerarse bajo. Es fundamental que el alumno reflexione sobre su desempeño y busque mejorar en las áreas donde ha enfrentado dificultades. Se recomienda una mayor participación en clase y la búsqueda de apoyo adicional si es necesario.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
