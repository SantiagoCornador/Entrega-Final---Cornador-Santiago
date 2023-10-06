import { useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import ItemDetail from "./ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {

    const [productos, setProductos] =useState ({})
    const {pid} = useParams () 

            useEffect(() =>{
            const db = getFirestore ()
            const queryDoc = doc (db , "productos " , pid)
            getDoc (queryDoc)
            .then (resp => ({id: resp.id, ...resp.data()}))
            .then (resp => setProductos (resp))
        },[])

    return (
        <div>
            <ItemDetail productos={productos} />
        </div>
    )
}

export default ItemDetailContainer