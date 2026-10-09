import { ProductCard } from './components/ProductCard';
import { products } from './data/product';
import '../techmart-ecommerce/src/App'

function App() {
  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
      <h1>🛒 TechMart E-Commerce</h1>
      
      <button style={{backgroundColor:"red", color:"white", padding:"1.3vh", margin:"2vh", width:"30vh"}}>გაფილტვრა</button>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={(prod) => alert(`დაემატა კალათაში: ${prod.title}`)} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;