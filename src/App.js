
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaLibros from './ListaLibros';
import AgregarLibro from './AgregarLibro';
import './App.css';
import Navii from "./Nav";
import EditarLibro from './EditarLibro';



function App() {

  return (
    <div className="App">
      <Navii />

      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListaLibros />} />
            <Route path="/Agregar" element={<AgregarLibro />} />
            <Route path="/editar/:id" element={<EditarLibro />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );

}

export default App;
