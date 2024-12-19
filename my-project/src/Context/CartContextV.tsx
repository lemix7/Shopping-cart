import { createContext, Dispatch, SetStateAction,useState } from "react";

export type product = {
  title: string;
  price: number;
  image: string;
}

interface CartContextInterface{
    cart: product[],
    setCart: Dispatch<SetStateAction<product[]>>
}

export const CartContextV = createContext<Partial<CartContextInterface>>({})

type cartProps ={
    children: React.ReactNode
}


export default function CartProvider({children}: cartProps){
    const [cart, setCart] = useState<product[]>([])
    return(
        <CartContextV.Provider value={{cart, setCart}}>
            {children}
        </CartContextV.Provider>
    )
}