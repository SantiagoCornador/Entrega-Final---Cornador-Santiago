import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './Componentes/Navbar/NavBar';
import Footer from './Componentes/Footer/Footer'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {    
    
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={ <ItemListContainer />}/>
                <Route path='/Category/:cid' element={ <ItemListContainer />}/>
                <Route path='/Detalle/:pid' element={ <ItemDetailContainer />}/>
                
            </Routes>
            <Footer />
            
        </BrowserRouter>
    )
}

export default App