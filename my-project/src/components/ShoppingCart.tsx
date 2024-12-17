import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { CartContext } from "@/Context/CartContext";
import { useContext } from "react";

type product = {
  title: string;
  price: number;
  image: string;
}
type cartType ={

  cart: product[]
  setCart: (cart: product[]) => void
}

const ShoppingCart = () => {
  const { cart , setCart } = useContext<cartType>(CartContext);

  // Check if data exists and has at least one item
  let totalPrice = 0 

  const handleClearCart = () => { // this only clear the cart but it does not remove the product from the cart it need to remove the product from the cart array 
    setCart([])   
    totalPrice = 0  
  }

  console.log(cart , 'cart')

  return (
    <div className="w-1/4 rounded-sm py-6 flex flex-col gap-2 absolute top-0 right-0 justify-between bg-gray-200">
      <h1 className="text-3xl mb-8 text-center">Your Cart</h1>

      <div className="max-h-[550px] overflow-scroll">

        {cart && cart.length === 0 && (
          <h1 className="text-4xl my-8 text-center">Cart is Empty</h1>
        )}

        {cart.map((product , index ) => ( 
          <CartItem
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        )
        )}
      </div>

      {cart.map((product) => ( 
        totalPrice += product.price
      ))}

      <CartTotal  total={totalPrice} clear={handleClearCart} />
    </div>
  );
};

export default ShoppingCart;
