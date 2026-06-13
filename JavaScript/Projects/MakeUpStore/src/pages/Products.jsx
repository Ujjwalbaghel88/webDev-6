// import React, { useEffect, useState } from "react";

// import loading from "../assets/loading.gif";
// import loading2 from "../assets/loading2.gif";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const fetchProducts = async () => {
//     try {
//       setIsLoading(true);

//       // const res = await fetch("https://fakestoreapi.com/products");
//        const res = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
//       const data = await res.json();
//       setProducts(data);
//     } catch (error) {
//       setIsError(true);
//       setErrorMessage(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <div className="w-full h-[90vh] flex justify-center items-center">
//           <img src={loading2} alt="" className="w-50" />
//         </div>
//       ) : (
//         <div className="p-10 grid grid-cols-4 gap-5">
//           {products.length > 0 &&
//             products.map((product, index) => (
//               <div className="w-75 border rounded h-100 p-3" key={index}>
//                 <div className="w-full h-40">
//                   <img
//                     src={product.image}
//                     alt=""
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//                 <div className="flex flex-col justify-between h-50">
//                   <div>
//                     <p className="text-xl" title={product.title}>
//                       {product.title.length > 50
//                         ? product.title.slice(0, 47) + "..."
//                         : product.title}
//                     </p>
//                     <p className="text-sm capitalize text-gray-500">
//                       {product.category}
//                     </p>
//                     <p>₹ {product.price * 100}</p>
//                     <p>{product.rating.rate}/5</p>
//                   </div>

//                   <button className="bg-orange-400 rounded-full px-4 py-2">
//                     Add to cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default Products;
import React, { useEffect, useState } from "react";

import loading2 from "../assets/loading2.gif";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    try {
      setIsLoading(true);

      const res = await fetch(
        "https://makeup-api.herokuapp.com/api/v1/products.json",
      );

      const data = await res.json();

      console.log(data);

      setProducts(data);
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isError) {
    return (
      <div className="text-center text-red-500 mt-10">
        <h1>Error: {errorMessage}</h1>
      </div>
    );
  }

  return (
    <>
      {isLoading ? (
        <div className="w-full h-[90vh] flex justify-center items-center">
          <img src={loading2} alt="loading" className="w-50" />
        </div>
      ) : (
        <div className="p-10 grid grid-cols-4 gap-5">
          {products.length > 0 &&
            products.map((product) => (
              <div
                className="border rounded p-3 flex flex-col justify-between"
                key={product.id}
              >
                {/* Image */}
                <div className="w-full h-50">
                  <img
                    src={product.image_link}
                    alt={product.name}
                    className="w-full h-full object-contain"
                   
                  />
                </div>

                {/* Details */}
                <div className="mt-3">
                  <p className="text-xl font-semibold" title={product.name}>
                    {product.name?.length > 40
                      ? product.name.slice(0, 40) + "..."
                      : product.name}
                  </p>

                  <p className="text-sm text-gray-500 capitalize">
                    {product.brand}
                  </p>

                  <p className="mt-1">
                    ₹ {product.price ? product.price : "N/A"}
                  </p>

                  <p className="text-sm capitalize">{product.product_type}</p>
                </div>

                {/* Button */}
                <button className="bg-orange-400 rounded-full px-4 py-2 mt-4 hover:bg-orange-500">
                  Add to cart
                </button>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Products;
