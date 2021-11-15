import Select from "components/atoms/Select";

export default function SelectRedux({
	input,
	meta: { touched, error },
	...rest
}: any) {
	return (
		<Select
			error={touched && error}
			{...rest}
			{...input}
			onBlur={() => {}}
			onChange={({ value }) => input.onChange(value)}
		/>
	);
}
