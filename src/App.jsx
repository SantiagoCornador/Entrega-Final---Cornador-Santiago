import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './Componentes/Navbar/NavBar';
import Footer from './Componentes/Footer/Footer'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './Context/CartContext';
import { CartConteiner } from './Componentes/CartConteiner/CartConteiner';

import 'bootstrap/dist/css/bootstrap.min.css';





function App() {    
    
    return (
        <BrowserRouter>
        <CartContextProvider>
                <NavBar />
                <Routes>
                    <Route path='/' element={ <ItemListContainer />}/>
                    <Route path='/Category/:cid' element={ <ItemListContainer />}/>
                    <Route path='/Detalle/:pid' element={ <ItemDetailContainer />}/>
                    <Route path='/cart' element={ <CartConteiner />}/>
                </Routes>
                <Footer />
            </CartContextProvider>
        </BrowserRouter>
    )
}

export default App