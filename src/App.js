import logo from "./logo.svg";
import "./App.css";
import { MyNav } from "./components/MyNav";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { ProductDetails } from "./components/ProductDetails";
import { ProductForm } from "./components/ProductForm";
import { NotFound } from "./components/NotFound";

function App() {
	return (
		<div>
			<MyNav />
			<Routes>
				<Route path='' element={<Home />} />
				<Route path='home' element={<Home />} />
				<Route path='products' element={<Products />} />
				<Route path='products/:id' element={<ProductDetails />} />
				<Route path='products/:id/edit' element={<ProductForm />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
