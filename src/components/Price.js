import products from "../../public/product";

function Price() {
  return products.forEach((product) => {
    <p>`$ {product.price}`</p>;
  });
}
