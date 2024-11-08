import { product } from "../product";

function Image() {
  return (
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      <img
        alt={product.title}
        src={product.image}
        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    </div>
  );
}

export default Image;
