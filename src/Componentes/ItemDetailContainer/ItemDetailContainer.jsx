import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail/ItemDetail"
import { mFecth } from "../../utils/mockFetch"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

    const [productos, setProductos] =useState ({})
    const {pid} = useParams () 

    useEffect(() =>{
        mFecth(Number(pid))
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