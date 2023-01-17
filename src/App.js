import { BrowserRouter as Router } from 'react-router-dom';

import AppContent from 'components/AppContent';
import Footer from 'components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
       <AppContent />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
