
const Item = ({productos}) => {
  return (
  <div className="card w-25">
  
  <div className="card-body">
  <img className="w-100" src={productos.imageUrl} alt="imágen prenda" />
  <p>Descripción: {productos.description}</p>
  <p>Precio: ${productos.price}</p>
  </div>
  <div className="card-footer">
  <button className="btn btn-outline-dark">Detalle</button>
  </div>
  </div>
  )
  }

export default Item