import { ProductCard } from './components/ProductCard';
import { Product } from './types/product';

const sampleProduct: Product = {
  id: '1',
  title: 'MacBook Pro 16',
  price: 2499,
  category: 'laptops',
  rating: 4.9,
  inStock: true,
  discount: 10,
  imageUrl: 'https://via.placeholder.com/300'
};

function App() {
  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
      <h1>🛒 TechMart E-Commerce</h1>
      <ProductCard 
        product={sampleProduct} 
        onAddToCart={(prod) => alert(`დაემატა კალათაში: ${prod.title}`)} 
      />
    </div>
  );
}

export default App;