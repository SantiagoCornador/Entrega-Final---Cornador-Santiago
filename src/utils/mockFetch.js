export const productos = [
    { 
        id: 1, 
        name: 'Zapatilla', 
        stock: 8, 
        price: 10000, 
        description: 'Aire Force',
        imageUrl: 'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw7829c3e7/products/NIDZ5193-100/NIDZ5193-100-1.JPG'
        
    },

    { 
        id: 2, 
        name: 'Buzo', 
        stock: 10, 
        price: 7000, 
        description: 'Buzo Invierno',
        imageUrl: 'https://tequierofashion.com/cdn/shop/products/product-image-656828942_580x.jpg?v=1571720312'
    },

    { 
        id: 3, 
        name: 'Pantalón', 
        stock: 12, 
        price: 9000, 
        description: 'Pantalon Joggin',
        imageUrl: 'https://background.com.ar/wp-content/uploads/2020/02/1.png'
        
    },

    { 
        id: 4, 
        name: 'Remeras', 
        stock: 15, 
        price: 4000, 
        description: 'Remeras lisas de algodón',
        imageUrl: 'https://deliver.com.ar/wp-content/uploads/2021/09/REMERA-OVERSIZE-22-X-3-02-scaled.jpg'
        
    },

    { 
        id: 5, 
        name: 'Jeans', 
        stock: 12, 
        price: 10000, 
        description: 'Jeans',
        imageUrl: 'https://acdn.mitiendanube.com/stores/001/231/400/products/794-jeans-jogger-cargo1-ddf4ceb5fe91654f3f16799258142145-480-0.jpg'
        
    },
]
export const mFecth = () => new Promise ((res, rej) => {

    const condition = true
    if (condition){
        setTimeout(() => { 
        res(productos);
    }, 3000);
    } else {
    rej('Sin productos')
    }

})
