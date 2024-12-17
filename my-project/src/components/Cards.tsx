import ProductCard from "./ProductCard";
import {  useEffect, useState } from "react";
import { UseFetch } from "@/customHook/UseFetch";

type CartItem = {
  title : string ,
  price : number
  image : string
}

type CardsProps = {
  onStateChange : (cart: CartItem[]) => void
}


const Cards = ({onStateChange}: CardsProps) => {

  const { data } = UseFetch({
      url: "https://fakestoreapi.com/products",
    });


  const [cart , setCart] = useState<CartItem[]>([])

  const handleClick = (title: string , price: number , image: string) => {
    setCart([...cart , {title , price, image}])
  }

  const updateParent = () => {
    onStateChange(cart)
  }

  useEffect(() => {
    updateParent()
  }, [cart])


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
          onClick={() => handleClick(product.title , product.price , product.image)}
        />
        
      ))}
    </div>

   
  );
};

export default Cards;
