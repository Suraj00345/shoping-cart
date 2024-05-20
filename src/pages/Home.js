import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <h2 className="heading">Welcome to the Suraj's store</h2>
      <section>
        <input/>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
