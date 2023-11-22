import './App.css';
import Navbar from './component/navbar';
import Hero from './component/hero';
import Collection from './component/collection';
import Product from './component/product';
import Newsroom from './component/newsroom';
import Footer from './component/footer';


export default function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Collection />
        <Product />
        <Newsroom />
        <Footer />
    </div>
  );
}
