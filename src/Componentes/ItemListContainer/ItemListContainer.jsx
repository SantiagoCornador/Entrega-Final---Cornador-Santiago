import { useEffect, useState } from "react"
import { mFecth } from "../../utils/mockFetch"
import ItemList from "../itemList/itemList"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)
    const {cid} =useParams ()
    console.log (cid)

        useEffect(() => {
            if (cid) {
                mFecth()
            .then(respuesta => setProductos( respuesta.filter (productos => cid === productos.category )))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
                
            } else {
                mFecth()
                .then(respuesta => setProductos(respuesta))
                .catch(err => console.log(err))
            .finally(()=> setLoading(false)) 
            }
            
    }, [cid])


    console.log(productos)
    return (
        <div className="row">
            { loading ? <h2>Loading...</h2> : <ItemList productos={productos}/> }
        </div>
    )
}

export default ItemListContainer

