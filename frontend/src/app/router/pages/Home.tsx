import { useCustomReactQuery } from "../../../hooks";
import { Product } from "../../../types";

type DataType = {
  data: Array<Product>;
  error: unknown;
  loading: boolean;
};

const Home = () => {
  const {
    data: products,
    error,
    loading,
  }: DataType = useCustomReactQuery(`/api/products`);

  if (error) {
    console.log(error);
    return <div>Something went wrong!</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="m-10 text-center font-bold">PRODUCTS</div>

      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <div key={product.id} className="m-5">
            <div className="flex flex-col items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-64"
              />
              <div className="font-bold">{product.name}</div>
              <div className="font-bold">₹{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
