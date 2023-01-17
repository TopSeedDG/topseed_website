import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from './pages/temporary/utils/ScrollToTop';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/about-us",
		element: <><ScrollToTop/><AboutUs /></>,
	},
	{
		path: "/contact-us",
		element: <><ScrollToTop/><ContactUs /></>,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
