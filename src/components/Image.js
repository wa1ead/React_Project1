import products from "../../public/product";

function Image() {
  return products.forEach((product) => {
    <img alt={product.title} src={product.image} />;
  });
}

export default Image;
