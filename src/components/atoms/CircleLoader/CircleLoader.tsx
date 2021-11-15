import { styled } from "baseui";
import { StyledSpinnerNext } from "baseui/spinner";

export default function CircleLoader(props: any) {
	const LoadSpinner = styled("div", () => ({
		position: "absolute",
		top: "0",
		left: "0",
		right: "0",
		bottom: "0",
		opacity: "0.9",
		cursor: "wait",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		zIndex: props.zIndex || "50",
		background: !props.zIndex ? "rgb(250 250 250 / 79%)" : "",
	}));

	const styleStyledSpinnerNext = {
		borderTopWidth: "5px",
		borderLeftWidth: "5px",
		borderRightWidth: "5px",
		borderBottomWidth: "5px",
		width: props.width || "44px",
		height: props.height || "44px",
		borderTopColor: "rgb(0 0 0)",
	};

	return (
		<LoadSpinner title="Loading...">
			<StyledSpinnerNext style={{ ...styleStyledSpinnerNext }} />
		</LoadSpinner>
	);
}
