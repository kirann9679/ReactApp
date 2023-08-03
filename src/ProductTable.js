import FoodGroup from "./FoodGroup";

function group(products) {
  return products.reduce((reducedValue, product) => {
    const result = { ...reducedValue };

    if (result[product.category]) {
      result[product.category].push(product);
    } else {
      result[product.category] = [product];
    }

    return result;
  }, {});
}

export default function ProductTable({ products, content, showStocked }) {
  // const details = groupBy((product) => product.category, products);
  let details;
  const searchedProducts = products.filter((product) => {
    const productName = product.name.toLowerCase();
    const contentToCheck = content.toLowerCase();
    return contentToCheck ? productName.includes(contentToCheck) : true;
  });
  if (showStocked) {
    const stockedProducts = searchedProducts.filter(
      (product) => product.stocked
    );
    // details = groupBy((product) => product.category, stockedProducts);
    details = group(stockedProducts);
  } else {
    // details = groupBy((product) => product.category, searchedProducts);
    details = group(searchedProducts);
  }
  console.log("details", details);
  const categories = Object.keys(details);
  console.log("categories", categories);
  const rows = categories.map((category, i) => (
    <FoodGroup key={i} products={details[category]} category={category} />
  ));
  console.log("rows", rows);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
