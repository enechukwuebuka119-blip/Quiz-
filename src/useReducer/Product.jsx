import { useReducer } from "react";
import "./Product.css";
import { CartButton } from "./cartButton";
import { FaCartPlus } from "react-icons/fa";

export const Product = () => {
  const initialState = {
    product: [
      { id: 1, name: "IPhone 17", price: 2500, quantity: 0 },
      { id: 2, name: "MacBook Pro", price: 2000, quantity: 0 },
      { id: 3, name: "Samsung Air Conditioner", price: 1000, quantity: 0 },
      { id: 4, name: "HP Laptop", price: 500, quantity: 0 },
    ],
    cart: [],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const existingItem = state.cart.find(
          (item) => item.id === action.payload.id
        );
        if (existingItem) {
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: 1 }],
          };
        }
      case "PLUS":
        const item = state.cart.find(
          (item) => item.name == action.payload.name
        );
        console.log(item);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (index) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: state.product[index],
      quantity: 0,
    });
  };
  return (
    <>
      <div className="header">
        <h1>E-commerce Platform</h1>
        <CartButton
          num={state.cart.reduce((total, item) => total + item.quantity, 0)}
        />
      </div>
      <h2>Produts</h2>
      <div className="container">
        <ul className="prod-container">
          {state.product.map((item, index) => (
            <li key={index}>
              {item.name}
              <FaCartPlus className="add" onClick={() => addToCart(index)} />
              <p>${item.price}</p>
            </li>
          ))}
        </ul>
      </div>

      <h2>Cart</h2>
      <div style={{ marginTop: "20px" }}>
        <ul className="cart-cont">
          {state.cart.map((item, index) => (
            <li
              key={index}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <p>{item.name}</p>
              <p>Price: ${item.price * item.quantity}</p>
              <div style={{ display: "flex", gap: "25px" }}>
                <button
                  style={{ width: "25px", height: "25px" }}
                  onClick={(index) =>
                    dispatch({ type: "PLUS", payload: state.cart[index] })
                  }
                >
                  +
                </button>
                {item.quantity}
                <button style={{ width: "25px", height: "25px" }}>-</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
