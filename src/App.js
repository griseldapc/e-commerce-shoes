import './App.css';
import Header from './component/header';
import Hero from './component/hero';
import Collection from './component/collection';
import Product from './component/product';
import Newsroom from './component/newsroom';
import Footer from './component/footer';


export default function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <Collection />
        <Product />
        <Newsroom />
        <Footer />
    </div>
  );
}
