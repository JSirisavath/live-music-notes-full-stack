import './assets/css/index.css';

// Routing libraries to route to pages based on URL:
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import testing page from src/pages folder
import TestingPage from './pages/TestingPage';

import MainPageBanner from './pages/MainPageBanner';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Main page,  pass in a page component */}
          <Route path="/" element={<MainPageBanner />} />

          {/* Testing page component redirect*/}
          <Route path="/test" element={<TestingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
