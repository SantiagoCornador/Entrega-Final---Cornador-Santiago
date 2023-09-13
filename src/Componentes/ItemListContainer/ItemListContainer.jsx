import { useEffect, useState } from "react"
import { mFecth } from "../../utils/mockFetch"
import ItemList from "../itemList/itemList"


const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)

        useEffect(() => {
            mFecth()
            .then(respuesta => setProductos(respuesta))
            .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])


    console.log(productos)
    return (
        <div className="row">
            { loading ? <h2>Loading...</h2> : <ItemList productos={productos}/> }
        </div>
    )
}

export default ItemListContainer

