import React from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  // const datas = [
  //   {
  //     id: 1,
  //     logo: "",
  //     title: "Add Product",
  //     link: "/addProduct",
  //   },
  //   {
  //     id: 2,
  //     logo: "",
  //     title: "Product List",
  //     link: "",
  //   },
  //   {
  //     id: 3,
  //     logo: "",
  //     title: "Categories",
  //     link: "",
  //   },
   
  // ];
  return (
    <section className="flex flex-col items-center justify-center">
      {/* <h1 className="lg:text-4xl text-4xl font-semibold my-5">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5 w-full">
        {datas.map((data, idx) => (
          <div
            key={idx}
            className="p-5 flex justify-center items-center rounded-3xl  text-white bg-blue-600 hover:bg-blue-700  shadow-lg"
            onClick={() => navigate(data.link)}
          >
            <div>{data.logo}</div>
            <p className="lg:text-lg md:text-base">{data.title}</p>
          </div>
        ))}
      </div> */}
      
    </section>
  );
};

export default Products;
