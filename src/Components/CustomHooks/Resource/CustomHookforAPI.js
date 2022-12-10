import ProductInfo from "./ProductInfo";
import UserInfo from "./UserInfo";

function CustomHookforAPI() {
  return (
    <>
      <UserInfo userId={"123"} />
      {"..................................................."}
      <ProductInfo productId={"1234"} />
    </>
  );
}

export default CustomHookforAPI;
