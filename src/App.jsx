import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Location from './components/Location';

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <Location />
      </main>
      <Footer />
    </>
  );
}

export default App;
