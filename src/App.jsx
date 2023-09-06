import { useState } from 'react'

import NavBar from './Componentes/Navbar/NavBar';
import Footer from './Componentes/Footer/Footer'
import Saludar from './Componentes/ItemListContainer/ItemListContainer';

// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';






function App() { 
   
  const [count, setCount] =  useState(0)

    const titulo = 'Hola soy un titulo'
    const subtitulo = 'Hola soy un subtitulo'

    const addCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <NavBar />

            <Saludar titulo={titulo} subtitulo={subtitulo} />

            <label>
                <strong>{ count }</strong>
            </label>
            <button onClick={addCount}> + 1 </button>

            <Footer />
            
        </div>
    )
}

export default App