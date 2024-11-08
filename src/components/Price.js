import { product } from "../product";

function Price() {
  return <p className="text-sm font-medium text-gray-900">${product.price}</p>;
}

export default Price;
