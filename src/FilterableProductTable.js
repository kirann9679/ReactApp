import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function Loader() {
  return <p>Loading the API data</p>;
}

export default function FilterableProductTable({ products, apiData }) {
  const [contentElement, setContent] = useState();
  const [checkBoxElement, handleCheckBox] = useState();
  console.log("contentElement", contentElement);
  console.log("checkBoxElement", checkBoxElement);
  return (
    <div>
      <SearchBar handleContent={setContent} handleCheckBox={handleCheckBox} />
      <ProductTable
        products={products}
        content={contentElement?.target?.value || ""}
        showStocked={checkBoxElement?.target?.checked || false}
      />
      {apiData ? <p>{JSON.stringify(apiData)}</p> : <Loader />}
    </div>
  );
}
