import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/App.css';
import Home from './pages/Home';
import Showcase from './pages/Showcase';
import About from './pages/About';

function App({  })  {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App