import { cartState } from "@/atoms-recoil/cartState"
import Image from "next/image"
import { useRecoilState } from "recoil"

import toast from 'react-hot-toast'



const Products = ({product}) => {

    const [cartItem, setCartItem] = useRecoilState(cartState);


// add to cart function
    const addToCart = () =>{

        //if product its in cart
        if(cartItem.findIndex(prod => prod.id === product.id) === -1){
             setCartItem(prevState => [...prevState,  product])
        }else{
            setCartItem(prevState => {
                return prevState.map(item => {
                    return item.id === product.id ? {...item, quantity: item.quantity +1} : item
                }) 
            })
        }

        toast.success(`${product.name} added to cart`)
    
    }

  return (
    <div className="bg-white shadow-2xl">

        <Image
        src={product.image}
        alt="product"
        width={310}
        height={310}
        className="mx-auto object-contain"
        />

        <div className="mt-4 px-6"> 
                <div className="flex items-center justify-between text-[26px]">
                        <h1>{product.name}</h1>
                        <h3>${product.price}</h3>
                </div>

                <button 
                onClick={addToCart}
                className="bg-red-500 px-4 py-2 text-white my-4 block mx-auto hover:bg-red-600 ">Add To Cart</button>
        </div>
        
    </div>
  )
}

export default Products