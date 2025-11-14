import { FaCartShopping } from "react-icons/fa6";
const style = {
  display: "flex",
};
export const CartButton = ({ num }) => {
  return (
    <>
      <div styles={{ style }}>
        <FaCartShopping />
        <sup>{num}</sup>
      </div>
    </>
  );
};
