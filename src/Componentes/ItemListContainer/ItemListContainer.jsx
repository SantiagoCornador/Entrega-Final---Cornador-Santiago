import { useEffect, useState } from "react"
import ItemList from "../itemList/itemList"
import { useParams } from "react-router-dom"
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where  } from "firebase/firestore"


const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)
    const {cid} =useParams ()
    //console.log (cid)

    useEffect(()=>{
            if (cid) {
                const db = getFirestore ()
                const queryCollection = collection (db, "productos ")
                const queryFilter = query(queryCollection, where("category", "==", cid))
                getDocs (queryFilter)
                .then (resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data ()}))))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))           
            } else {            
                const db = getFirestore ()
                const queryCollection = collection (db, "productos ")
                getDocs (queryCollection)
                .then (resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data ()}))))
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

