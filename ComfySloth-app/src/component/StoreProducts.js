import React from "react";
import Filter from "./Filter";
import FilteredProducts from "./FilteredProducts";
const StoreProducts = () => {
  return (
    <section>
      <section className="section-center">
        <div className="store-c">
          <Filter />
          <FilteredProducts />
        </div>
      </section>
    </section>
  );
};

export default StoreProducts;
