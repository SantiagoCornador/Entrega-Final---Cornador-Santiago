import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import { useCartContext } from "../../Context/CartContext"
import { useState } from "react"
import { Link } from "react-router-dom"

export const CartConteiner = () => {
    const [dataForm, setDataForm] = useState ({
        name: "",
        phone: "",
        email: ""
    })
    const [id, setId] = useState ("")
    const {cartList, deleteCart, precioTotal, eliminarItem} = useCartContext ()
    
    const handleAddOrder = async (evt) =>{
        evt.preventDefault ()
        const order = {}
        order.buyer = {dataForm}
        order.items = cartList.map ( prod => {
            return {id: prod.id, name: prod.name , price: prod.price, quantity: prod.quantity}
        })

        order.total = precioTotal()

    const queryDB = getFirestore ()
    const ordersCollection = collection (queryDB, "orders")
        addDoc (ordersCollection ,order)
        .then (({id}) => setId(id))
        .catch (err => console.log(err))
        .finally ( () =>{
            setDataForm ({
                name: "",
                phone: "",
                email: ""
            })
            deleteCart()
        }

        )

        const queryUpdateProduct = doc (queryDB, "productos ", "wZFME8HRP2ixq0vbPrb2")
        updateDoc (queryUpdateProduct, {
            stock: 11
        })
    }

        const handleOnChange = (evt) => {
        setDataForm({
            ...dataForm,
            [evt.target.name] : evt.target.value
        })

    }

    return (
        <>
        {id !== '' && <h3>Se ha generado le orden de compra: {id}</h3>}
        {cartList.length > 0 ?

        <div>
            {cartList.map(prod => <div key={prod.id}> 
            <img src={prod.imageUrl} className="w-25"/> - Producto: {prod.name} br - Precio: ${prod.price} - Cantidad {prod.quantity}
            <button className="btn btn-danger" onClick={() => eliminarItem(prod.id)}>Eliminar</button>
            </div>)}
            <button className="btn btn-danger" onClick={deleteCart}>Vaciar Carrito</button>
            {precioTotal()!= 0 && <h2>Precio Total: ${precioTotal()}</h2>}
            
            <form onSubmit={handleAddOrder}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Ingresar nombre "
                    value={dataForm.name}
                    onChange={handleOnChange}
                />

                <input 
                    type="text" 
                    name="phone" 
                    placeholder="Ingresar celular"
                    value={dataForm.phone}
                    onChange={handleOnChange}
                />

                <input 
                    type="text" 
                    name="email" 
                    placeholder="Ingresar email"
                    value={dataForm.email}
                    onChange={handleOnChange}
                />

                <button className="btn btn-success"
                >Terminar compra</button>
            </form>

        </div>

        :

        <div>
            <h2> No hay productos en el carrito </h2>
            
            <Link to = {'/'}>
                        <button className="btn btn-success">Volver a tienda</button>
                    </Link>
        </div>}
    </>
    
    )
}

