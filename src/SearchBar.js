export default function SearchBar({ handleContent, handleCheckBox }) {
  return (
    <form>
      <input type="text" placeholder="Search...." onChange={handleContent} />
      <label>
        <input type="checkbox" onChange={handleCheckBox} /> Only show products
        in stock
      </label>
    </form>
  );
}
