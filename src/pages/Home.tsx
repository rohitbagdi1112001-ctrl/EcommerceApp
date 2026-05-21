import {
  useEffect,
  useState,
} from "react";

import {
  useSearchParams,
} from "react-router-dom";

import {
  getCategories,
  getProducts,
} from "../services/productService";

import ProductCard from "../components/products/ProductCard";
import type { Product, Category } from "../types/product";


function Home() {

  const [products, setProducts] =
    useState<Product[]>([]);

  const [categories, setCategories] =
    useState<Category[]>([]);

  const [searchParams, setSearchParams] =
    useSearchParams();

  // URL Params
  const selectedCategories =
    searchParams
      .get("categories")
      ?.split(",")
      .filter(Boolean) || [];

  const sort =
    searchParams.get("sort") || "";

  // Categories
  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  // Products
  useEffect(() => {

    getProducts(selectedCategories)
      .then((data) => {

        const sortedProducts = [...data];

        if (sort === "lowToHigh") {
          sortedProducts.sort(
            (a, b) => a.price - b.price
          );
        }

        if (sort === "highToLow") {
          sortedProducts.sort(
            (a, b) => b.price - a.price
          );
        }

        setProducts(sortedProducts);
      });

  }, [selectedCategories.join(","), sort]);

  // Update URL Params
  const updateParams = (
    key: string,
    value: string
  ) => {

    const params =
      new URLSearchParams(searchParams);

    value
      ? params.set(key, value)
      : params.delete(key);

    setSearchParams(params);
  };

  // Category Filter
  const handleCategoryChange = (
    id: string
  ) => {

    const updated = selectedCategories.includes(id)

      ? selectedCategories.filter(
        (cat) => cat !== id
      )

      : [...selectedCategories, id];

    updateParams(
      "categories",
      updated.join(",")
    );
  };

  return (

    <main style={{ padding: 20 }}>

      {/* Filters */}

      <section
        style={{ marginBottom: 30 }}
      >

        <h2>Filter By Category</h2>

        <div
          style={{
            display: "flex",
            gap: 15,
            flexWrap: "wrap",
            marginTop: 10,
          }}
        >

          {categories
            .slice(0, 20)
            .map((cat) => (

              <label key={cat.id}>

                <input
                  type="checkbox"
                  checked={selectedCategories.includes(
                    String(cat.id)
                  )}
                  onChange={() =>
                    handleCategoryChange(
                      String(cat.id)
                    )
                  }
                />

                {" "}
                {cat.name}

              </label>
            ))}

        </div>

      </section>

      {/* Sorting */}

      <section
        style={{
          marginBottom: "30px",
          padding: "15px",
          border: "1px solid #eee",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "250px",
          width: "80%",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "18px",
          }}
        >
          Sort By Price
        </h2>

        <select
          value={sort}
          onChange={(e) =>
            updateParams("sort", e.target.value)
          }
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "14px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          <option value="">Select Sorting</option>
          <option value="lowToHigh">
            Low To High
          </option>
          <option value="highToLow">
            High To Low
          </option>
        </select>
      </section>

      {/* Products */}

      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: 20,
        }}
      >

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </section>

    </main>
  );
}

export default Home;