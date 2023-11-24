export default interface ProductInterface {
  id: number;
  price: number;
  title: string;
  description: string;
  category: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
  //rating: number;
  // images: string[];
  // thumbnail: string;
  // brand: string;
  // stock: number;
  // discountPercentage: number;
}
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
interface productDetails {
  productId: string | number;
}

export async function getProducts(): Promise<ProductInterface[]> {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Error occured while fetching data");
  }
  const products: ProductInterface[] = await res.json();
  return products;
}

export const getShoppingProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Error occurred while fetching data");
  }

  const results = await res.json();
  const products: Product[] = results.products;
  return products;
};

export const getProductsDetails = async (
  productId: productDetails
): Promise<Product[]> => {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);

  if (!res.ok) {
    throw new Error("failed to fetch product");
  }
  const product = await res.json();
  console.log(product);

  return await product;
};

////https://dummyjson.com/products
//https://fakestoreapi.com/products
