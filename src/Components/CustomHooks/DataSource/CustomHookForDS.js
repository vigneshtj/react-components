import { useState, useEffect, useRef } from "react";
import UserInfo from "./UserInfo";
import ProductInfo from "./ProductInfo";

function CustomHookForDS() {
  //Save product in local storage that can be retrieved by useDataSource hook
  useEffect(() => {
    localStorage.setItem(
      "1234",
      JSON.stringify({
        id: "1234",
        name: "Flat-Screen TV",
        price: "$300",
        description: "Huge LCD screen, a great deal",
        rating: 4.5,
      })
    );
  }, []);

  const [userId, setUserId] = useState("123");
  const userInputRef = useRef();

  return (
    <>
      <h1>User Info Section</h1>
      <input type="text" ref={userInputRef} />{" "}
      <button onClick={() => setUserId(userInputRef.current.value)}>
        Change User Info
      </button>
      <br />
      <UserInfo userId={userId} />
      {"..................................................."}
      <h1>Product Info Section</h1>
      <ProductInfo productId="1234" />
    </>
  );
}

export default CustomHookForDS;
