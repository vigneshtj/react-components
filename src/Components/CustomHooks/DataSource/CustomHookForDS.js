import { useEffect } from "react";
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

  return (
    <>
      <UserInfo userId="123" />
      {"..................................................."}
      <ProductInfo productId={`1234`} />
    </>
  );
}

export default CustomHookForDS;
