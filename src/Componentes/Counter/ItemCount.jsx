
import { useCounter } from '../hooks/useCounter'



const ItemCount = ({inital, stock, onAdd}) => {
    const {count, handleAdd, handleSubstract} = useCounter (inital, stock )
    return  <center>    
                    <h2>Counter</h2>
                    <button onClick={handleAdd}> + 1 </button>
                    <label>
                        <strong>{ count }</strong>
                    </label>
                    <button onClick={handleSubstract}> - 1 </button>
                    <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            </center>

}

export default ItemCount    