import { Button } from "./ui/button";
import { useState } from "react";



const QunatityCounter = () => {

  const [count , setCount] = useState<number>(1)

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
   }
   
   const handleDecrement = () => {
     setCount((prev) => prev - 1);
   }

  return (
    <div className="flex p-1  mt-2 rounded-md  items-center">
      <Button className="flex justify-center w-7 h-7 px-3" onClick={handleDecrement}>-</Button>
      <span className=" flex justify-center bg-white px-3">{count}</span>
      <Button className=" flex justify-center w-7 h-7 px-3" onClick={handleIncrement}>+</Button>
    </div>
  );
};

export default QunatityCounter;
