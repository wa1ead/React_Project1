import products from "../../public/product";

function Name() {
  return products.forEach((product) => {
    <p>{product.title}</p>;
  });
}

export default Name;
