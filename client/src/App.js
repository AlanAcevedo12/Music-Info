import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from "react";
import Landing from "./pages/Landing/Landing";
// import Home from "./pages/Home/Home";
// import Register from './pages/Register/Register';
// import LogIn from './pages/LogIn/LogIn';
// import Profile from './pages/Profile/Profile';

const Home = lazy(() => import("./pages/Home/Home"));
const Register = lazy(() => import("./pages/Register/Register"));
const LogIn = lazy(() => import("./pages/LogIn/LogIn"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));

function App() {
	return (
		<div className="App">
			<Suspense fallback={<h1>Cargando...</h1>}>
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
						excact
						path="/favorites"
						element={<Favorites />}
					/>
					<Route
						path='/register'
						element={<Register />}
					/>
					<Route
						path='/login'
						element={<LogIn />}
					/>
					<Route
						path='/profile'
						element={<Profile />}
					/>
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
