import { useEffect } from "react";
import { useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import {
  VscClose,
  MdDelete,
  AiFillPlusCircle,
  AiOutlineMinusCircle,
} from "../utils/icons";
import useCart from "../hooks/useCart";
import s1 from "../images/s1.png"

const Cart = ({ openModal, handleClose }) => {
  // const { cartDetails } = useSelector((state) => state.products);

  const {
    cartData,
    setCartData,
    calculation,
    incrementCount,
    decerementCount,
    deleteItem,
  } = useCart();

  useEffect(() => {
    setCartData([{
      prodId: 1,
      prodName: "Aditya Pathak",
      price: 3265,


    }]);
  }, []);

  return (
    <Dialog onClose={handleClose} open={openModal} className="cart_modal">
      <div className="flex__between cart modal__header">
        <span>Shopping Cart</span>
        <VscClose onClick={() => handleClose()} />
      </div>

      <div className="cart_container">
        {Array.isArray(cartData) && cartData.length > 0 ? (
          cartData?.map((item, index) => (
            <div className="cart_list" key={index}>
              <div className="cart_left_side">
                <figure>
                  <img
                    src={s1}
                    alt={item?.prodName}
                  />
                </figure>
              </div>

              <div className="cart_middle_side">
                <p>{item?.prodName}</p>
                <span>₹{item?.price}</span>
                <div className="action_btns flex">
                  <AiOutlineMinusCircle
                    onClick={() => decerementCount(item?.prodId)}
                  />
                  <span>{item?.cartQty}</span>
                  <AiFillPlusCircle
                    onClick={() => incrementCount(item?.prodId)}
                  />
                </div>
              </div>

              <MdDelete onClick={() => deleteItem(item?.prodId)} />
            </div>
          ))
        ) : (
          <h2 className="empty_message flex__center">
            Cart is empty, Please add items
          </h2>
        )}
      </div>

     {cartData?.length && <div className="calculation_section">
        <strong>Amount Details</strong>

        <div className="calculations_container flex__between">
          <strong>Price ({0 || calculation.items} items)</strong>
          <span>₹{calculation.total}</span>
        </div>

        <div className="calculations_container flex__between">
          <strong>Discount</strong>
          <span className="discount">{calculation.discount}</span>
        </div>

        <div className="calculations_container flex__between">
          <strong>Delivery Charges</strong>
          <span className="delivery">{calculation.delCharges}</span>
        </div>

        <div className="calculations_container flex__between">
          <strong>Total</strong>
          <span className="total">
            ₹{calculation.total + calculation.discount}
          </span>
        </div>
      </div>}

      <div className="modal_footer flex__between">
        <span>Your Saving on this order ₹3546</span>
        <button className="btn">Place Order</button>
      </div>
    </Dialog>
  );
};

export default Cart;
