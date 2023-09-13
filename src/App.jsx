import { useState } from 'react'

import NavBar from './Componentes/Navbar/NavBar';
import Footer from './Componentes/Footer/Footer'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemCount from './Componentes/Counter/ItemCount';

// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';







function App() {    
    const onAdd = (count)  => {
        console.log (count)
    }

    return (
        <div>
            <NavBar />

            <ItemListContainer />

            <ItemCount inital={1} stock ={5} onAdd={onAdd}/>

            <Footer />
            
        </div>
    )
}

export default App