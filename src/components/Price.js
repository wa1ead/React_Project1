import {products} from "../product";

function Price() {
  return products.forEach((product) => {
    <p>`$ {product.price}`</p>;
  });
}

export default Price;
