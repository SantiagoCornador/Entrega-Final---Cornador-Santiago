import React, { useState } from 'react'

export const useCounter = (min, max) => {
    const [counter, setcounter] = useState (min)

    const handleAdd = () => {
        if (counter < max ){
            setcounter (counter + 1)
        }
            
    }
    const handleSubstract = () => {
        if (count > min  ){
            setcounter (counter - 1)
    }
    }
    return {count, handleAdd, handleSubstract}
}

export default useCounter