import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { ItemsContext } from "@/Context/ItemsContext";
import { useContext } from "react";

const ShoppingCart = () => {
  const { data } = useContext(ItemsContext);

  // Check if data exists and has at least one item
  let totalPrice = 0 

  return (
    <div className="w-1/4 rounded-sm py-6 flex flex-col gap-2 absolute top-0 right-0 justify-between bg-gray-200">
      <h1 className="text-3xl mb-8 text-center">Your Cart</h1>

      <div className="max-h-[550px] overflow-scroll">
        <CartItem title={'iphone'} price={20} image="elephant" />

        {data.slice(0, 3).map((product , index ) => ( // display only 3 items in the cart
          <CartItem
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        )
        )}
      </div>

      {data.slice(0, 3).map((product) => ( // display the total of the 3 items in the cart
        totalPrice += product.price
      ))}

      <CartTotal  total={totalPrice} />
    </div>
  );
};

export default ShoppingCart;
