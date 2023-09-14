import { useState } from 'react'

import NavBar from './Componentes/Navbar/NavBar';
import Footer from './Componentes/Footer/Footer'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';

// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';







function App() {    
    
    return (
        <div>
            <NavBar />

            <ItemListContainer />

            <ItemDetailContainer />

            <Footer />
            
        </div>
    )
}

export default App