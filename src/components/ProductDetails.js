import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  AiFillStar,
  FaTruck,
  FiCheck,
  MdAddShoppingCart,
  HiShoppingBag,
} from "../utils/icons"
import { prodDetails } from "../constants";
import s1 from "../images/s1.png"
import Payment from "./Payment";
// import SimilarProduct from "./SimilarProduct";

const ProductDetails = () => {

    const [pinCode, setPinCode] = useState(null);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

  let arr = new Array(4).fill(null);

  useEffect(() => {
  }, []);

  const handleCart = (prodId) => {
  };

  const checkEligibility = () => {
    console.log(pinCode)
  }

  const handleCreateOrder = async (amount, currency) => {
    // const data = await axios.post(serverBaseUrl + '/order',
    //  {
    //   amount: amount*100, //convert amount into lowest unit. here, Dollar->Cents
    //   currency,
    //   keyId: process.env.REACT_APP_RAZORPAY_KEY_ID,
    //   KeySecret: process.env.REACT_APP_RAZORPAY_KEY_SECRET,
    //  }
    // );
  
    // if(data && data.order_id){
    //   setOrderDetails({
    //     orderId: data.order_id,
    //     currency: data.currency,
    //     amount: data.amount,
    //   });
    setShowPaymentModal(true);
  // };
}

  return (
 <>
    <div className="prod_details" id="details">
      <div className="single_prod_details_container">
        <div className="details_left_side flex">
          <div className="image_container flex__center">
            <figure>
              <img src={s1} alt={prodDetails?.prodName} />
            </figure>

            {/* <div className="wishList flex">
              <FaHeart />
              <span>Add to WishList</span>
            </div> */}
          </div>

          <div className="different_images flex">
            {arr.map((_, index) => (
              <figure key={index}>
                <img
                  style={{ width: "150px" }}
                  src={s1}
                  alt="S1"
                />
              </figure>
            ))}
          </div>

          <div className="btn_container flex__between">
            <button
              type="button"
              className="addTOCart btn flex"
              onClick={() => handleCart(prodDetails?.prodId)}
            >
              <MdAddShoppingCart />
              Add to Cart
            </button>
            <button type="button" className="buyBow btn flex" onClick={handleCreateOrder}>
              <HiShoppingBag />
              Buy Now
            </button>
          </div>
        </div>

        <div className="details_right_side">
          <h2>{prodDetails?.prodName}</h2>
          <div className="rating_container flex">
            <span className="rating flex">
              <AiFillStar />
              <strong>4.2</strong>
            </span>
            <span>Rated by 1896 & 512 Reviewed</span>
          </div>

          <div className="rate_conatiner flex">
            <h3 className="rate">₹{prodDetails?.prodPrice}</h3>
            <span className="off">
              ₹
              {prodDetails?.prodPrice +
                Math.round(prodDetails?.prodPrice * 0.07)}
            </span>
            <small className="percent_off">7% off</small>
          </div>

          <div className="pinCode flex">
            <div className="flex__start input__field">
              <FaTruck />
              <input
              type="number"
                name="pinCode"
                value={pinCode}
                placeholder="Enter Pincode"
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>
            <span className="flex" onClick={checkEligibility} >
              <FiCheck />
            </span>
          </div>

          <div className="highlights">
            <strong>Highlights</strong>
            <p>
              Self-Timer | Type C and Mini HDMI | 9 Auto Focus Points | 35x
              Optical Zoom., Effective Pixels: 18 MP APS-C CMOS sensor-which is
              25 times larger than a typical Smartphone sensor., Wi-Fi | Full HD
              | Video Recording at 1080 p on 30fps.
            </p>
          </div>

          <div className="description">
            <strong>Description</strong>
            <p>{prodDetails?.prodDesc} </p>
          </div>
        </div>
      </div>

      {/* <div>
        <SimilarProduct />
      </div> */}
    </div>

    {showPaymentModal && <Payment
    amount={100}
    currency={'INR'}
    orderId={'6sdfdwdwd68eft'}
    keyId={"rzp_test_hvtjcp41acBcmM"}
    keySecret={"gbZW2JfMAJMkMmPCZm0fzg7C"}
  />}
 </>
  );
};

export default ProductDetails;
