import { Button } from "./ui/button";
import QunatityCounter from "./QunatityCounter";

type CartItemProps = {
  title: string;
  price: number;
  image: string;
};

const CartItem = ({ title, price, image }: CartItemProps) => {
  return (
    <div className="flex justify-between items-start p-4 w-full">
      <div className="flex gap-4 ">
        <img className="w-[90px] h-[90px]  " src={image} alt="Product img" />
        <div>
          <h2 className="text-xl font-semibold">Product {title}</h2>
          <p className="text-xl font-light">price {price}</p>
          <QunatityCounter />
        </div>
      </div>
      <Button className="w-7 h-7 rounded-sm">X</Button>
    </div>
  );
};

export default CartItem;
