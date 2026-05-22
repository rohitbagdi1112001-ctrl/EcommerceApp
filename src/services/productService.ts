import BASE_URL from '../services/api';
import axios from "axios";
// Products
export const getProducts = async (
  categoryIds: string[]
) => {

  // No Filters
  if (!categoryIds.length) {

    const response = await axios.get(
      `${BASE_URL}/products`
    );

    return response.data;
  }

  // Multiple Categories
  const responses = await Promise.all(

    categoryIds.map((id) =>

      axios.get(
        `${BASE_URL}/products/?categoryId=${id}`
      )
    )
  );

  // Merge + Remove Duplicates
  return responses
    .flatMap((res) => res.data)
    .filter(
      (product, index, self) =>
        index ===
        self.findIndex(
          (p) => p.id === product.id
        )
    );
};

// Single Product
export const getProductById = async (
  id: string
) => {

  const response = await axios.get(
    `${BASE_URL}/products/${id}`
  );

  return response.data;
};


// Categories
export const getCategories = async () => {

  const response = await axios.get(
    `${BASE_URL}/categories`
  );

  return response.data;
};