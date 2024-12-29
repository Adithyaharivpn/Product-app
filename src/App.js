import './App.css';
import ProductForm from './components/ProductForm';
import ProductSearch from './components/ProductSearch';
import ProductView from './components/ProductView';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      <ProductForm />
      <ProductSearch />
      <ProductView />
    </div>
  );
}

export default App;
