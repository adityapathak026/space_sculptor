import { useEffect, useState } from "react";
const useCart = () => {
  const userId = localStorage.getItem("userId");
  const [cartData, setCartData] = useState([]);
  const [calculation, setCalculation] = useState({
    items: 0,
    discount: -3546,
    delCharges: "Free",
    total: 0,
  });

  useEffect(() => {
    cartCalculations(cartData);
  }, [cartData]);

  // Increment Item Count
  const incrementCount = (prodId) => {
    cartCalculations(cartData);
    setCartData(
      cartData?.map((prod) => {
        if (prodId === prod.prodId) {
          const updatedProd = { ...prod, cartQty: prod.cartQty + 1 };
          return updatedProd;
        }
        return prod;
      })
    );
  };

  // Decrement Item Count
  const decerementCount = (prodId) => {
    cartCalculations(cartData);
    setCartData(
      cartData?.map((prod) => {
        if (prodId === prod?.prodId && prod?.cartQty > 1) {
          const updatedProd = { ...prod, cartQty: prod.cartQty - 1 };
          return updatedProd;
        }
        return prod;
      })
    );
  };

  // Delete Item from Cart
  const deleteItem = (prodId) => {
    const filteredItems = cartData?.filter((item) => prodId !== item.prodId);
    setCartData(filteredItems);
    cartCalculations(filteredItems);
  };

  const cartCalculations = (cartDetails) => {
    let total = 0;
    let items = 0;
    if (Array.isArray(cartDetails)) {
      cartDetails.forEach((item) => {
        items += item.cartQty;
        total += item.price * item.cartQty;
      });
    }
    setCalculation({ ...calculation, items, total });
  };

  return {
    cartData,
    setCartData,
    calculation,
    incrementCount,
    decerementCount,
    deleteItem,
  };
};

export default useCart;
