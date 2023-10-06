import { useState } from "react";
import ItemCount from "../../Counter/ItemCount";
import {useCartContext } from "../../../Context/CartContext";
import { Link } from "react-router-dom";

    const ItemDetail = ({productos}) => {

        const [isInCount , setIsInCount] = useState (true)

        const {addProduct,} = useCartContext ()

        const onAdd = (quantity)  => {
            addProduct({...productos, quantity})
            setIsInCount (false)
        }

    
    return (
        <div className="row">
            <h2>Detalle</h2>
            <div className="col">
                <img className="w-50" src={productos.imageUrl} alt="imagen" />
                <div>
                    <p>Nombre: {productos.name}</p>
                    <p>Descripción: {productos.description}</p>
                    <p>Precio: ${productos.price}</p>
                    <p>Stock: {productos.stock}</p>
                </div>
            </div>

            <div className="col">
                {isInCount ? 
                    <ItemCount initial= {1} stock= {5} onAdd={onAdd}/>
                :        
                <>
                    <Link to = {'/cart'}>
                        <button className="btn btn-outline-secondary">Ir al carrito</button>
                    </Link>

                    <Link to = {'/'}>
                        <button className="btn btn-outline-secondary">Seguir comprando</button>
                    </Link>
                </>
                
                }
                
            </div>
        </div>
    )
    }
    
    export default ItemDetail 