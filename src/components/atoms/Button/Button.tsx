import { Button as BaseButton } from "baseui/button";

type ButtonProps = React.ComponentProps<typeof BaseButton>;

export default function Button(props: ButtonProps) {
	return <BaseButton {...props} />;
}
