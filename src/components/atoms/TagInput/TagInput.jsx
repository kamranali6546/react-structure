import { useState } from "react";
import ToasterService from "services/toaster.service";

import Input from "../Input";
import InputReplacement from "./InputReplacement";

export default function TagInput({
	handleTags,
	placeholder = "Enter a Tag",
	...rest
}) {
	const [tags, setTags] = useState([]);
	const [value, setValue] = useState("");

	const addTag = (tag) => {
		let arr = [...tags, tag];

		setTags(arr);
		handleTags?.(arr);
	};

	const removeTag = (tag) => {
		let arr = tags.filter((t) => t !== tag);

		setTags(arr);
		handleTags?.(arr);
	};

	const onKeyDown = (e) => {
		switch (e.keyCode) {
			// Enter
			case 13: {
				e.preventDefault();

				if (!value) return;
				if (value.trim() === "") return setValue("");

				const results = tags.filter((word) => word === value.trim());
				if (results[0] === value.trim()) {
					ToasterService.showError(`${value.trim()} already exists`);
					return setValue("");
				}

				addTag(value.trim());
				setValue("");

				return;
			}
			// Backspace
			case 8: {
				if (value || !tags.length) return;

				removeTag(tags[tags.length - 1]);

				return;
			}
			default:
				return;
		}
	};

	return (
		<Input
			{...rest}
			value={value}
			placeholder={placeholder}
			onChange={(e) => setValue(e.currentTarget.value)}
			overrides={{
				Input: {
					component: InputReplacement,
					style: { width: "auto", flexGrow: 1 },
					props: { tags, removeTag, onKeyDown },
				},
			}}
		/>
	);
}
