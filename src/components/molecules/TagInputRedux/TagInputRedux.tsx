import TagInput from "components/atoms/TagInput";

export default function TagInputRedux({
	input,
	meta: { error, touched },
	...rest
}: any) {
	return (
		<TagInput
			{...rest}
			{...input}
			error={touched && error}
			handleTags={(tags: string[]) => input.onChange(tags)}
		/>
	);
}
