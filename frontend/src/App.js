import logo from './logo.svg';
import './App.css';

export default function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}
