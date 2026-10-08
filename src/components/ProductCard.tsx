import { ProductCardProps } from '../types/product';

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div style={{ border: '1px solid #000', padding: '16px', borderRadius: '8px', backgroundColor: "lightgray"}}>
      <h3>{product.title}</h3>
      <p>ფასი: ${product.price}</p>
      <p>კატეგორია: {product.category}</p>
      <button  onClick={() => onAddToCart && onAddToCart(product)}>
        კალათაში დამატება
      </button>
    </div>
  );
};