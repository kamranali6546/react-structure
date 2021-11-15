import { Input as BaseInput, SIZE } from "baseui/input";

type InputProps = React.ComponentProps<typeof BaseInput>;

export default function Input(props: InputProps) {
	return (
		<BaseInput
			autoComplete="off"
			size={SIZE.compact}
			overrides={{
				StartEnhancer: { style: { paddingLeft: "0px", paddingRight: "0px" } },
			}}
			{...props}
		/>
	);
}
