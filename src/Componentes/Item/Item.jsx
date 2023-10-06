import { Link } from "react-router-dom"

const Item = ({productos}) => {
  return (
    <div className="card w-25">
  
      <div className="card-body">
        <img className="w-75" src={productos.imageUrl} alt="imágen prenda" />
        <p>Descripción: {productos.description}</p>
        <p>Precio: ${productos.price}</p>
      </div>
      <div className="card-footer">
        <Link to={`/Detalle/${productos.id}`}>
        <button className="btn btn-outline-dark">Detalle</button>
        </Link>
      </div>
    </div>
  )
  }

export default Item