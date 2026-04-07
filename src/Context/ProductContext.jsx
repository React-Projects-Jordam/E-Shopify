import axios from 'axios'
import React, { createContext, useEffect , useState } from 'react'

export const PostContext = createContext()
export const ElementContext = createContext()

const ProductContext = ({children}) => {

    const [product, setProduct] = useState([])
    const [element, setElement] = useState("")

    useEffect(() => {
        const FetchingData = async ()=> {
            try{
                const product = await axios.get('https://jsonplaceholder.typicode.com/posts')

                console.log(product);
                setProduct(product.data)
                
            }catch(err){    
                console.log(err); 
            }
        }

        FetchingData()
    },[])

    return (
    <PostContext.Provider value={{product}}>
        <ElementContext.Provider value={{element,setElement}}>
        {children}
        </ElementContext.Provider>
    </PostContext.Provider>
  )
}

export default ProductContext
