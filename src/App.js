import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/Homepage";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <main>
          <HomePage />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
