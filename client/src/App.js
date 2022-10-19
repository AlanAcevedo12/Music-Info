import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Register from './pages/Register/Register';

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
				<Route
					path='/register'
					element={<Register />}
				/>
			</Routes>
		</div>
	);
}

export default App;
