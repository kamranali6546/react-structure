import TagInput from "components/atoms/TagInput";
import { TagFormControlInputReduxOwnProps } from ".";
import FieldError from "components/atoms/FieldError";
import FormControl from "components/atoms/FormControl";

type TagFormControlInputReduxProps = TagFormControlInputReduxOwnProps & any;

export default function TagFormControlInputRedux({
	input,
	label,
	meta: { error, touched },
	...rest
}: TagFormControlInputReduxProps) {
	return (
		<FormControl
			label={label}
			caption={touched && error && <FieldError error={error} />}
		>
			<TagInput
				{...rest}
				error={touched && error}
				handleTags={(tags: string[]) => input.onChange(tags)}
			/>
		</FormControl>
	);
}
