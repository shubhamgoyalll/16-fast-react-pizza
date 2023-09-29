import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    //To prevent new navigation in SPA
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order Here"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export async function loader({ params }) {
  //params in react router as an argument and orderId is the params in URL
  const order = await getOrder(params.orderId);
  return order;
}

export default SearchOrder;
