import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CircleLoader from "components/atoms/CircleLoader";

const Home = lazy(() => import("pages/Home"));
const NotFound = lazy(() => import("pages/NotFound"));
const AddClass = lazy(() => import("pages/AddClass"));
const AddPrices = lazy(() => import("pages/AddPrices"));

export default function AppRoutes() {
	return (
		<Suspense fallback={<CircleLoader />}>
			<Routes>
				{/* Public Routes */}
				<Route path="/" element={<Home />} />
				<Route path="/add-class" element={<AddClass />} />
				<Route path="/add-prices" element={<AddPrices />} />

				{/* Redirect to root or Not Found */}
				{/* <Route path="*" element={<Navigate to="/" />} /> */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Suspense>
	);
}
