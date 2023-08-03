import { useEffect, useState } from "react";
import data from "./Data";
import FilterableProductTable from "./FilterableProductTable";

const apiURL = "https://jsonplaceholder.typicode.com/todos/1";

export default function App() {
  const [apiData, setData] = useState();

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  });
  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  });
  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  });

  return <FilterableProductTable products={data} apiData={apiData} />;
}
