import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from '../pages/cartPage';
import MainPage from '../pages/mainPage';
import OrderPage from '../pages/orderPage';
import './App.module.scss';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<MainPage />}
					/>
					<Route
						path="cart"
						element={<CartPage />}
					/>
					<Route
						path="order"
						element={<OrderPage />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
