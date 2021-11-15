import { FormControlInputReduxOwnProps } from ".";
import FieldError from "components/atoms/FieldError";
import FormControl from "components/atoms/FormControl";
import InputRedux from "components/molecules/InputRedux";

type FormControlInputReduxProps = FormControlInputReduxOwnProps & any;

export default function FormControlInputRedux({
	input,
	label,
	handleBlur,
	handleFocus,
	meta: { error, touched },
	...rest
}: FormControlInputReduxProps) {
	const inputProps = {
		input,
		handleBlur,
		handleFocus,
		meta: { error, touched },
		...rest,
	};

	return (
		<FormControl
			label={label}
			caption={touched && error && <FieldError error={error} />}
		>
			<InputRedux {...inputProps} />
		</FormControl>
	);
}
