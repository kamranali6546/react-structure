import { FieldErrorProps } from ".";

export default function FieldError({ error }: FieldErrorProps) {
	return (
		<div style={{ fontSize: "14px", color: "red", marginTop: "5px" }}>
			* {error}
		</div>
	);
}
