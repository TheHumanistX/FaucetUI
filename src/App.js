// Import modules
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

// Import local components
import { Header } from './Components/common';
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
        <Route path="/Components/whitepaper/" element={<Whitepaper />} />
      </Routes>
      <div className="temp">
        <ul>
          <li>Temp words</li>
          <li>temp</li>
          <li>stuff</li>
        </ul>
      </div>

    </div>
  );
}

export default App;
