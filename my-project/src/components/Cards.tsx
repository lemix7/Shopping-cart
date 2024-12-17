import ProductCard from "./ProductCard";
import { useContext, useState } from "react";
import { ItemsContext } from "@/Context/ItemsContext";

type CartItem = {
  title : string ,
  price : number
}

type CardsProps = {
  onStateChange : (cart: CartItem[]) => void
}


const Cards = ({onStateChange}: CardsProps) => {
  const { data } = useContext(ItemsContext);
  const [cart , setCart] = useState<CartItem[]>([])

  const handleClick = (title: string , price: number) => {
    setCart([...cart , {title , price}])
  }

  const updateParent = () => {
    onStateChange(cart)
  }

  updateParent()

  return (
    <div className="flex flex-wrap justify-center gap-8 px-11 py-11">
      {data.slice(0,8).map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
          onClick={() => handleClick(product.title , product.price)}
        />
        
      ))}
    </div>

   
  );
};

export default Cards;
