import { useCartContext } from "../../Context/CartContext"

function CartWidget() {
  const{cantidadTotal} = useCartContext()
  return (
    <div>🛒{cantidadTotal() != 0 && cantidadTotal()}</div>
  )
}

export default CartWidget