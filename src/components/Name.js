import products from "../../public/product";

function Name() {
  return products.forEach((product) => {
    <h2>{product.title}</h2>;
  });
}

export default Name;
