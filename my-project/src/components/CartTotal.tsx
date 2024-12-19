import { Button } from "./ui/button";

type carTotal = {
  total: number;
  clear: () => void;
};

const CartTotal = ({ total, clear }: carTotal) => {
  return (
    <div className="flex justify-between flex-col gap-6 p-4">
      <h2 className="text-2xl ">Total : $ {total} </h2>
      <div className="flex gap-3">
        <Button className="text-2xl rounded-sm px-8 py-6 " onClick={clear}>
          Clear Cart
        </Button>
        <Button className="text-2xl rounded-sm px-8 py-6">Checkout</Button>
      </div>
    </div>
  );
};

export default CartTotal;
