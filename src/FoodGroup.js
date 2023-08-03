import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
export default function FoodGroup({ category, products }) {
  const productComponents = products.map((product, i) => {
    return <ProductRow product={product} key={i} />;
  });
  return (
    <>
      <ProductCategoryRow category={category} />
      {productComponents}
    </>
  );
}
