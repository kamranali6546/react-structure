import { FormControl as BaseFormControl } from "baseui/form-control";

type FormControlProps = React.ComponentProps<typeof BaseFormControl>;

export default function FormControl(props: FormControlProps) {
	return (
		<BaseFormControl
			overrides={{ Label: { style: { marginBottom: "4px" } } }}
			{...props}
		/>
	);
}
