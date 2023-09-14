import ItemCount from "../../Counter/ItemCount";

    const ItemDetail = ({productos}) => {
        console.log(productos);
        const onAdd = (count)  => {
            console.log ('productos seleccionados:', count)
        }
    
      return (
        <div classnName="row">
            <h2>Detalle</h2>
            <div className="col">
                <img className="w-25" src={productos.imageUrl} alt="imagen" />
                <div>
                    <p>Nombre: {productos.name}</p>
                    <p>Descripción: {productos.description}</p>
                    <p>Precio: {productos.price}</p>
                    <p>Stock: {productos.stock}</p>
                </div>
            </div>
            <div className="col">
            <ItemCount initial= {1} stock= {5} onAdd={onAdd}/>
            </div>
        </div>
      )
    }
    
    export default ItemDetail 