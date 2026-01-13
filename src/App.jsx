import { useState } from "react";

function App() {
  const productsData = [
    { id: 1, name: "iPhone", category: "Mobile", price: 800 },
    { id: 2, name: "Samsung", category: "Mobile", price: 700 },
    { id: 3, name: "MacBook", category: "Laptop", price: 1500 },
    { id: 4, name: "HP Laptop", category: "Laptop", price: 1000 },
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("");


  const filteredProducts = productsData
    .filter((product) => {
      const matchSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "All" || product.category === category;

      return matchSearch && matchCategory;
    })
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div style={{ padding: 20 }}>
      <h2>Search | Filter | Sort (Machine Coding)</h2>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* FILTER */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Mobile">Mobile</option>
        <option value="Laptop">Laptop</option>
      </select>

      {/* SORT */}
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="">Sort By Price</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>

      <hr />

      {/* PRODUCT LIST */}
      <ul>
        {filteredProducts.length === 0 && <p>No products found</p>}

        {filteredProducts.map((product) => (
          <li key={product.id}>
            <b>{product.name}</b> — ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
