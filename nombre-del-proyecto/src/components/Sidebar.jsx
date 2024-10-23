import React from 'react';
import { HomeIcon, BookOpenIcon, ClipboardListIcon, UserCircleIcon } from '@heroicons/react/outline';

const Sidebar = () => {
    return ( <
        div className = "w-64 h-screen bg-blue-700 text-white flex flex-col" >
        <
        h2 className = "text-2xl font-bold p-4" > Estudiantes < /h2> <
        nav className = "flex-1" >
        <
        ul >
        <
        li className = "p-4 hover:bg-blue-600 flex items-center" >
        <
        HomeIcon className = "h-5 w-5 mr-2" / >
        Dashboard <
        /li> <
        li className = "p-4 hover:bg-blue-600 flex items-center" >
        <
        BookOpenIcon className = "h-5 w-5 mr-2" / >
        Materias <
        /li> <
        li className = "p-4 hover:bg-blue-600 flex items-center" >
        <
        ClipboardListIcon className = "h-5 w-5 mr-2" / >
        Faltas <
        /li> <
        li className = "p-4 hover:bg-blue-600 flex items-center" >
        <
        UserCircleIcon className = "h-5 w-5 mr-2" / >
        Perfil <
        /li> <
        /ul> <
        /nav> <
        /div>
    );
};

export default Sidebar;