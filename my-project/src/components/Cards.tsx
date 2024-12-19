import ProductCard from "./ProductCard";
import {  useContext } from "react";
import { UseFetch } from "@/customHook/UseFetch";
import { CartContextV } from "@/Context/CartContextV";


const Cards = () => {
  
  const {cart = [], setCart} = useContext(CartContextV)
  
  const { data } = UseFetch({
      url: "https://fakestoreapi.com/products",
    });


  const handleClick = (title: string , price: number , image: string) => {
    if (setCart) {
      setCart([...cart , {title , price, image}]);
    }
  }


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
