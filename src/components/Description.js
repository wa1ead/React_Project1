import products from "../../public/product";

function Description() {
  return products.forEach((product) => {
    <p>{product.description}</p>;
  });
}

export default Description;
