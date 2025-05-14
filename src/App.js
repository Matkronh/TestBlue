import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginButton from './components/LoginButton';
import PurchaseButton from './components/PurchaseButton';
import MembersPage from './components/MembersPage';
import './App.css';

function HomePage() {
  return (
    <div className="app">
      <header>
        <LoginButton />
      </header>
      <main>
        <h1>Welcome to Our Course</h1>
        <p>A professional, minimalist learning experience</p>
      </main>
      <footer>
        <PurchaseButton />
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/members" element={<MembersPage />} />
      </Routes>
    </Router>
  );
}

export default App;