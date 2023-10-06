import Home from './componentsblog/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Write from './componentsblog/Write';
import Fullpage from './componentsblog/Fullpage'
import Homepage from './componests2.js/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/blog" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="fullpage/:id" element={<Fullpage />} />
          <Route path="/homepage" element={<Homepage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
