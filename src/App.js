// Import modules
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

// Import local components
import { Header, Footer } from './Components/common';
import { Blog, Whitepaper, Home } from './Components';

//Import CSS Stylesheets
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/" element={<Blog />} />
        <Route path="/whitepaper/" element={<Whitepaper />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
