import Cards from "./components/Cards";
import ShoppingCart from "./components/ShoppingCart";
import CartProvider from "./Context/CartContextV";

const App = () => {
  return (
    <CartProvider>
      <div className="py-11">
        <h1 className="text-6xl text-center">Shopping Cart </h1>
        <Cards />
        <ShoppingCart />
      </div>
    </CartProvider>
  );
};

export default App;

// this is going to be a simple shopping cart app where the the product are fetched from an api and display in the app and the user can add the product to the cart and also remove the product from the cart and also increase/decrease the quantity of the product in the cart and the cart total is calculated and displayed in the app and the user can also clear the cart
