export function filterByCategory(products, categoryId) {
  return products.filter(p => p.categoryId === categoryId);
}
