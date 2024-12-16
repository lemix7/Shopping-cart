import Cards from "./components/Cards";
import ShoppingCart from "./components/ShoppingCart";
import { UseFetch } from "@/customHook/UseFetch";
import { ItemsContext } from "@/Context/ItemsContext";

const App = () => {
  const { data } = UseFetch({
    url: "https://fakestoreapi.com/products",
  });
  return (
    <ItemsContext.Provider value={{ data }}>
      <div className="py-11">
        <h1 className="text-6xl text-center">Shopping Cart </h1>
        <Cards />
        <ShoppingCart />
      </div>
    </ItemsContext.Provider>
  );
};

export default App;

// this is going to be a simple shopping cart app where the the product are fetched from an api and display in the app and the user can add the product to the cart and also remove the product from the cart and also increase/decrease the quantity of the product in the cart and the cart total is calculated and displayed in the app and the user can also clear the cart

// Here is the api that we are going to use to fetch the products (https://fakestoreapi.com/products)
