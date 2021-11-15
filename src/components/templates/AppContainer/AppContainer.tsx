import { AppContainerProps } from ".";
import { ALIGNMENT, Cell, Grid } from "baseui/layout-grid";

export default function AppContainer({ children }: AppContainerProps) {
	return (
		<div className="app-container">
			<Grid align={ALIGNMENT.center}>
				<Cell span={[4, 8, 12]}>{children}</Cell>
			</Grid>
		</div>
	);
}
