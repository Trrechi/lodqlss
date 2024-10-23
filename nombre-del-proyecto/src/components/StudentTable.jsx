import React from 'react';

const StudentTable = () => {
    const students = [
        { code: '6789012345', name: 'Juan Andrés Pérez Gómez', corte1: '', corte2: '', corte3: '', final: '', habilitacion: '', faltas: '' },
        { code: '1478523698', name: 'María Laura Rodríguez López', corte1: '', corte2: '', corte3: '', final: '', habilitacion: '', faltas: '' },
        // Agrega más estudiantes según necesites
    ];

    return ( <
        div className = "p-4" >
        <
        h3 className = "text-lg font-semibold mb-4" > Informe de Estudiantes < /h3> <
        table className = "min-w-full bg-white shadow-md rounded" >
        <
        thead >
        <
        tr >
        <
        th className = "py-2 px-4 bg-gray-200" > Código < /th> <
        th className = "py-2 px-4 bg-gray-200" > Nombre < /th> <
        th className = "py-2 px-4 bg-gray-200" > Corte 1 < /th> <
        th className = "py-2 px-4 bg-gray-200" > Corte 2 < /th> <
        th className = "py-2 px-4 bg-gray-200" > Corte 3 < /th> <
        th className = "py-2 px-4 bg-gray-200" > Nota Final < /th> <
        th className = "py-2 px-4 bg-gray-200" > Habilitación < /th> <
        th className = "py-2 px-4 bg-gray-200" > Faltas < /th> <
        /tr> <
        /thead> <
        tbody > {
            students.map((student, index) => ( <
                tr key = { index }
                className = "text-center" >
                <
                td className = "border px-4 py-2" > { student.code } < /td> <
                td className = "border px-4 py-2" > { student.name } < /td> <
                td className = "border px-4 py-2" > { student.corte1 } < /td> <
                td className = "border px-4 py-2" > { student.corte2 } < /td> <
                td className = "border px-4 py-2" > { student.corte3 } < /td> <
                td className = "border px-4 py-2" > { student.final } < /td> <
                td className = "border px-4 py-2" > { student.habilitacion } < /td> <
                td className = "border px-4 py-2" > { student.faltas } < /td> <
                /tr>
            ))
        } <
        /tbody> <
        /table> <
        /div>
    );
};

export default StudentTable;