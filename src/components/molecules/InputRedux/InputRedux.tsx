import Input from "components/atoms/Input";

export default function InputRedux({
	input,
	handleBlur,
	handleFocus,
	meta: { error, touched },
	...rest
}: any) {
	return (
		<Input
			{...rest}
			{...input}
			error={touched && error}
			onBlur={(e) => {
				handleBlur?.(e);
				e.preventDefault();
			}}
			onFocus={(e) => {
				handleFocus?.(e);
				e.preventDefault();
			}}
		/>
	);
}
