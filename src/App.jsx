import "./App.scss";
import Homepage from "./components/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Yes from "./components/yes/Yes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThankYou from "./components/thank-you/ThankYou";
import Food from "./components/food/Food";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
	},
	{
		path: "/thankyou",
		element: <ThankYou />,
	},
	{
		path: "/yes",
		element: <Yes />,
	},
	{
		path: "/food",
		element: <Food />,
	},
]);

function App() {
	return (
		<div className="main bg-rose-300 text-zinc-100">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
