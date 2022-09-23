import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route 
                excact
                path="/"
                element={<Landing />}
            />
            <Route 
                path="/home"
                element={<Home />}
            />
        </Routes>
    </div>
  );
}

export default App;
