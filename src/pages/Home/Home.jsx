// import { Cell, Grid } from "baseui/layout-grid";
// import AddClass from "pages/AddClass";
// import AddPrices from "pages/AddPrices";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div>
			<h1>My Chauffeur Admin</h1>
			<Link to="/add-class">Add Class</Link>
			<br />
			<br />
			<Link to="/add-prices">Add Prices</Link>
			{/* <Grid gridMargins={0} gridGutters={8}>
				<Cell span={[4, 4, 6]}>
					<AddClass />
				</Cell>
				<Cell span={[4, 4, 6]}>
					<AddPrices />
				</Cell>
			</Grid> */}
		</div>
	);
}
