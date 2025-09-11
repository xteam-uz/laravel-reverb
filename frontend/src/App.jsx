// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Message from './components/Message';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Message />} />
      </Routes>
    </Router>
  );
};

export default App;