import ProductCard from "./ProductCard";
import { useContext } from "react";
import { ItemsContext } from "@/Context/ItemsContext";

const Cards = () => {
  const { data } = useContext(ItemsContext);

  return (
    <div className="flex flex-wrap justify-center gap-8 px-11 py-11">
      {data.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default Cards;
