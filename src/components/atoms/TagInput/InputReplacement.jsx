import { forwardRef } from "react";
import { useStyletron } from "baseui";
import { StyledInput } from "baseui/input";
import { Tag, VARIANT as TAG_VARIANT } from "baseui/tag";

const InputReplacement = forwardRef(
	({ tags, removeTag, ...restProps }, ref) => {
		const [css] = useStyletron();

		return (
			<div
				className={css({
					flex: "1 1 0%",
					flexWrap: "wrap",
					display: "flex",
					alignItems: "center",
				})}
			>
				{tags.map((tag, index) => (
					<Tag
						key={index}
						variant={TAG_VARIANT.solid}
						onActionClick={() => removeTag(tag)}
					>
						{tag}
					</Tag>
				))}
				<StyledInput ref={ref} {...restProps} />
			</div>
		);
	}
);

export default InputReplacement;
