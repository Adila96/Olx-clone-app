import { createContext, useState,useEffect } from "react";

export const AddCartContext = createContext(null);


function CartProvider ({children}) {

const [productDetails, setProductDetails] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

const addToCart = (item) => {
    console.log("addtocart entry")
    const isItemInCart = productDetails.find((cartItem) => cartItem.id === item.id); // check if the item is already in the cart

    if (isItemInCart) {
      setProductDetails(
        productDetails.map(
          (
            cartItem 
          ) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem 
        )
      );
    
    } else {
      setProductDetails([...productDetails, { ...item, quantity: 1 }]);
    }
    
  };

  const removeFromCart = (item) => {
    const isItemInCart = productDetails.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
        setProductDetails(productDetails.filter((cartItem) => cartItem.id !== item.id)); // if the quantity of the item is 1, remove the item from the cart
    } else {
        setProductDetails(
        productDetails.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
            : cartItem
        )
      );
    }
  };
   useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(productDetails));
    console.log('storage cart items:',productDetails)
    console.log('storage 2 cart items:',localStorage.getItem("cartItems"))
    
   }, [productDetails]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    console.log('cart items:',cartItems)
    if (cartItems) {
        setProductDetails(JSON.parse(cartItems));
    }
  }, []);

    return (
        <AddCartContext.Provider value={{productDetails,addToCart,removeFromCart}}>
            {children}
        </AddCartContext.Provider>
    )
}
export default CartProvider;