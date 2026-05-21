import  BASE_URL  from '../services/api';

// Products
export const getProducts = async (
  categoryIds: string[]
) => {

  // No Filters
  if (!categoryIds.length) {

    return fetch(
      `${BASE_URL}/products`
    ).then((res) => res.json());
  }

  // Multiple Categories
  const responses = await Promise.all(

    categoryIds.map((id) =>

      fetch(
        `${BASE_URL}/products/?categoryId=${id}`
      ).then((res) => res.json())
    )
  );

  // Merge + Remove Duplicates
  return responses
    .flat()
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
) =>

  fetch(
    `${BASE_URL}/products/${id}`
  ).then((res) => res.json());

// Categories
export const getCategories = async () =>

  fetch(
    `${BASE_URL}/categories`
  ).then((res) => res.json());