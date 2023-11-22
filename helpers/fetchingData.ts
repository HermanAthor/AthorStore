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
export async function getProducts(): Promise<ProductInterface[]> {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: ProductInterface[] = await res.json();
  return products;
}

////https://dummyjson.com/products
//https://fakestoreapi.com/products
