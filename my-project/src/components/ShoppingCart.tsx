import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { useContext } from "react";
import { CartContextV } from "@/Context/CartContextV";

const ShoppingCart = () => {
  const { cart = [], setCart } = useContext(CartContextV);

  let totalPrice = 0;

  const handleClearCart = () => {
    // this only clear the cart but it does not remove the product from the cart it need to remove the product from the cart array
    if (setCart) {
      setCart([]);
    }
    totalPrice = 0;
    console.log(cart, "cart cleared");
  };

  console.log(cart, "cart");

  return (
    <div className="w-1/4 rounded-sm py-6 flex flex-col gap-2 absolute top-0 right-0 justify-between bg-gray-200">
      <h1 className="text-3xl mb-8 text-center">Your Cart</h1>

      <div className="max-h-[550px] overflow-scroll">
        {cart && cart.length === 0 && (
          <h1 className="text-4xl my-8 text-center">Cart is Empty</h1>
        )}

        {cart
          .filter( // this will create a new array with only unique product so the product will not be repeated in the cart
            (product, index, self) =>
              index === self.findIndex((item) => item.title === product.title)
          )
          .map((product, index) => (
            <CartItem
              key={index}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
      </div>

      {cart // this will ensure that the total price is calculated only once for each product
        .filter(
          (product, index, self) =>
            index === self.findIndex((item) => item.title === product.title)
        )
        .map((product) => {
          totalPrice += product.price;
          return null;
        })}

      <CartTotal total={totalPrice} clear={handleClearCart} />
    </div>
  );
};

export default ShoppingCart;
