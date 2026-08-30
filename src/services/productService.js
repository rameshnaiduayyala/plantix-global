import { plants } from '../data/plants';
import { categories } from '../data/categories';

export const productService = {
  // Get all products with optional filters and sorting
  getProducts: async ({
    category = null,
    search = '',
    priceMin = 0,
    priceMax = 1000,
    light = null,
    size = null,
    isExotic = null,
    sort = 'featured',
    page = 1,
    limit = 12,
  } = {}) => {
    // Simulating async network delay
    await new Promise((res) => setTimeout(res, 80));

    let filtered = [...plants];

    if (category) {
      filtered = filtered.filter(
        (p) =>
          p.categorySlug === category ||
          p.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search && search.trim() !== '') {
      const q = search.toLowerCase().trim();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (priceMin !== undefined && priceMax !== undefined) {
      filtered = filtered.filter((p) => p.price >= priceMin && p.price <= priceMax);
    }

    if (light) {
      filtered = filtered.filter((p) =>
        p.light.toLowerCase().includes(light.toLowerCase())
      );
    }

    if (size) {
      filtered = filtered.filter((p) =>
        p.size.toLowerCase().includes(size.toLowerCase())
      );
    }

    if (isExotic !== null && isExotic !== undefined) {
      filtered = filtered.filter((p) => p.isExotic === isExotic);
    }

    // Sorting
    switch (sort) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    const total = filtered.length;
    const startIndex = (page - 1) * limit;
    const paginatedItems = filtered.slice(startIndex, startIndex + limit);

    return {
      data: paginatedItems,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  },

  // Get single product by slug or ID
  getProductBySlug: async (slugOrId) => {
    await new Promise((res) => setTimeout(res, 60));
    const item = plants.find(
      (p) => p.slug === slugOrId || p.id === slugOrId
    );
    if (!item) {
      throw new Error('Plant not found');
    }
    return item;
  },

  // Get featured products
  getFeaturedProducts: async (limit = 4) => {
    await new Promise((res) => setTimeout(res, 50));
    return plants.filter((p) => p.featured).slice(0, limit);
  },

  // Get related products for details page
  getRelatedProducts: async (categorySlug, currentId, limit = 4) => {
    await new Promise((res) => setTimeout(res, 50));
    return plants
      .filter((p) => p.categorySlug === categorySlug && p.id !== currentId)
      .slice(0, limit);
  },

  // Get categories
  getCategories: async () => {
    await new Promise((res) => setTimeout(res, 50));
    return categories;
  },
};
