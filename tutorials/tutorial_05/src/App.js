// imports for components
import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data";// import for data
import { useEffect, useState, useTransition, useDeferredValue } from 'react';// import react hooks

function App() { // creating our main app
  const [cartItems, setCartItems] = useState([]); // setting the empty cart state

  function onAdd(product) { // onAdd checks the cart for the item, raising the item's counter if already in the basket, or adding it completely if not found
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x // raising the item's counter if already in the basket
      )
      setCartItems(newCartItems); 
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    } else { // adding it completely if not found
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
  }
  // setting up add/remove functions
  function onRemove(product) { // removes an item from the counter or completely if there is only one of that item in the basket
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) { // removing the entire item from basket if quantity === 1 on removal check
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    } else { // reducing the item's counter if quantity in basket > 1
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
  }

  const { products } = data; // pulling in our data storage (would be replaced with proper database)
  const [isPending, startTransition] = useTransition(); // using the transition hook to either retreive local storage or parse it and update the page appropriately

  useEffect(() => {
    startTransition(() => {
      setCartItems(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);
    });
  }, []);

  const cartItemsCount = useDeferredValue(cartItems.length); // keeps tally of amount of products, not an overall amount of each item in cart

  return isPending ? (<div>Loading...</div>) // displays either a loading screen or the page updated with appropriate information
    : (
      <div>
        <Header countCartItems={cartItemsCount} />
        <div className="row">
          <Main cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={products} />
          <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
        </div>
      </div>
    );
}

export default App;
