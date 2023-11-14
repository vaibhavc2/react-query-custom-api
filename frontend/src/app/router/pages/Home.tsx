import { Dispatch, SetStateAction } from "react";
import { useCustomReactQuery } from "../../../hooks";
import { Product } from "../../../types";

type DataType = {
  data: Array<Product>;
  error: unknown;
  loading: boolean;
  setSearch: Dispatch<SetStateAction<string>>;
};

const Home = () => {
  const {
    data: products,
    error,
    loading,
    setSearch,
  }: DataType = useCustomReactQuery(`/api/products`);

  // if (error) {
  //   console.log(error);
  //   return <div>Something went wrong!</div>;
  // }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <div className="m-10 text-center text-xl font-bold">Search Products</div>

      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="w-1/4 rounded-lg border-2 border-gray-500 p-2"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {error && (
        <div className="m-10 text-center text-base font-bold">
          Something went wrong!
        </div>
      )}

      {loading && (
        <div className="m-10 text-center text-base font-bold">Loading...</div>
      )}

      {loading === false && error === null && (
        <>
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
      )}
    </>
  );
};

export default Home;
