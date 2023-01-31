import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from "react";
import Landing from "./pages/Landing/Landing";
import Player from './components/Player/Player';
// import ListReviews from './pages/ListReviews/ListReviews';
// import Home from "./pages/Home/Home";
// import Register from './pages/Register/Register';
// import LogIn from './pages/LogIn/LogIn';
// import Profile from './pages/Profile/Profile';

const Home = lazy(() => import("./pages/Home/Home"));
const Register = lazy(() => import("./pages/Register/Register"));
const LogIn = lazy(() => import("./pages/LogIn/LogIn"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));
const Search = lazy(() => import("./pages/Search/Search"));
const CreateReview = lazy(() => import("./pages/Reviews/CreateReview/CreateReview"));
const Review = lazy(() => import("./pages/Reviews/Review/Review.jsx"));
const ListReviews = lazy(() => import("./pages/Reviews/ListReviews/ListReviews"));

function App() {
	return (
		<div className="App">
			<Player />
			<Suspense fallback={<h1>Cargando...</h1>}>
				<Routes >
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
						path="/search/:input"
						element={<Search />}
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
					<Route
						path='/reviews'
						element={<ListReviews />}
					/>
					<Route
						path='/review/create/:albumId'
						element={<CreateReview />}
					/>
					<Route
						path='/review/:reviewId'
						element={<Review />}
					/>
					<Route
						path="*"
						element={<h1>404: NOT FOUND</h1>}
					/>
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
