export type CartContextType = {
    cart : CartItem[] ,
    setCart : React.Dispatch<React.SetStateAction<CartItem[]>>
}

type CartItem = {
    title : string ,
    price : number
}