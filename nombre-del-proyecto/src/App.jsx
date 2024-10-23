import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StudentTable from './components/StudentTable';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen">
        <Header />
        <div className="flex-1 bg-gray-100 overflow-y-auto">
          <StudentTable />
        </div>
      </div>
    </div>
  );
};

export default App;
