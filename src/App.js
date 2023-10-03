import './App.css';
import NavBar from './Components/NavBar/Navbar';
import React from "react";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/free-solid-svg-icons';



function App() {

  return (
    <>
    
      <BrowserRouter>
      
      <NavBar background={'transparent'} />
    <Routes>
    
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:nombre" element={<ItemListContainer/>} />
      <Route path="/item/:id" element={<ItemDetailContainer/>} />
    </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
