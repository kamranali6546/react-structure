import { FormControlSelectReduxOwnProps } from ".";
import FieldError from "components/atoms/FieldError";
import FormControl from "components/atoms/FormControl";
import SelectRedux from "components/molecules/SelectRedux";

type FormControlSelectReduxProps = FormControlSelectReduxOwnProps & any;

export default function FormControlSelectRedux({
	input,
	label,
	meta: { error, touched },
	...rest
}: FormControlSelectReduxProps) {
	const selectProps = {
		input,
		meta: { error, touched },
		...rest,
	};

	return (
		<FormControl
			label={label}
			caption={touched && error && <FieldError error={error} />}
		>
			<SelectRedux {...selectProps} />
		</FormControl>
	);
}
