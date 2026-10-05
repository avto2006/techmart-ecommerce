export interface Product {
    id: string,
    title: string,
    price: number,
    category: "laptops" | "audio" | "accessories" | "smartphones",
    rating: number,
    inStock: boolean,
    discount?: number,
    imageUrl: string
}


export interface ProductCardProps {
    product: Product;
    onAddToCart?: (product: Product) => void;
}