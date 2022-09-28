import Home from './Home';
import Projects from './Projects'
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        
      </Routes>
    </div>

  );
}

export default App;
