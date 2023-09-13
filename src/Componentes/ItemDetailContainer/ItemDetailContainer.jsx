import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail/ItemDetail"
import { mFecth } from "../../utils/mockFetch"


const ItemDetailContainer = () => {

    const [productos, setProductos] =useState ({})
    useEffect(() =>{
        mFecth(2)
        .then(resp => setProductos(resp))
        .catch(err=> console.log(err))
        //.finally(set loading)

    },[])
    return (
        <div>
            <ItemDetail productos={productos} />
        </div>
    )
}

export default ItemDetailContainer