import { KIND, SIZE } from "baseui/button";
import { FieldArrayHeadingProps } from ".";
import Button from "components/atoms/Button";

export default function FieldArrayHeading({
	index,
	onClick,
	heading,
	fieldsLength,
}: FieldArrayHeadingProps) {
	return (
		<h3
			style={{
				margin: "0",
				display: "flex",
				flexWrap: "wrap",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			{index + 1}. {heading}
			{fieldsLength > 1 && (
				<Button
					type="button"
					size={SIZE.mini}
					onClick={onClick}
					kind={KIND.secondary}
				>
					Remove
				</Button>
			)}
		</h3>
	);
}
