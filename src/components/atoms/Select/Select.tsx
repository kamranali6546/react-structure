import { SIZE } from "baseui/button";
import { Select as BaseSelect } from "baseui/select";

type SelectProps = React.ComponentProps<typeof BaseSelect>;

export default function Select(props: SelectProps) {
	return (
		<BaseSelect
			size={SIZE.compact}
			backspaceRemoves={false}
			overrides={{ Dropdown: { style: { maxHeight: "300px" } } }}
			{...props}
		/>
	);
}
