import { useReducer, useState } from "react";

export const Cart = () => {
  const initialState = { product: [], cart: [] };

  const reducer = (state, action) => {
    switch (action.type) {
      case "Add Product":
        return { ...state, cart: [...state.cart, action.payload] };
      case "Delete All Product":
        return [];
    }
  };
  const [list, dispatch] = useReducer(reducer, initialState);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleItemName = (e) => {
    setName(e.target.value);
  };
  const handleItemPrice = (e) => {
    setPrice(e.target.value);
  };

  const add = () => {
    if (!price || !name) {
      console.log("Name and price must be field");
    } else {
      const newProduct = {
        name: name,
        price: parseFloat(price),
      };
      dispatch({ type: "Add Product", payload: newProduct });
      console.log(newProduct);
    }
    setName("");
    setPrice("");
  };

  return (
    <>
      <h1>Cart</h1>
      <ul>
        {list.cart.map((item, index) => (
          <li key={index}>
            {item.name}: ${item.price}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={handleItemName}
      />
      <input
        type="text"
        value={price}
        placeholder="Item price"
        onChange={handleItemPrice}
      />
      <h3>
        Total Price: $
        {list.cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
      </h3>
      <button onClick={add}>Add to cart</button>
    </>
  );
};
