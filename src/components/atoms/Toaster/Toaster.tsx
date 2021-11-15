import useEffectOnce from "hooks/useEffectOnce";
import ToasterService from "services/toaster.service";
import { toaster, ToasterContainer, PLACEMENT } from "baseui/toast";

export default function Toaster() {
	let toast;

	const successToaster = (content: string) => {
		toast = toaster.positive(<>{content}</>, {
			overrides: { InnerContainer: { style: { width: "100%" } } },
		});
	};

	const errorToaster = (content: string) => {
		toast = toaster.negative(<>{content}</>, {
			overrides: { InnerContainer: { style: { width: "100%" } } },
		});
	};

	useEffectOnce(() => ToasterService.subscribe(successToaster, errorToaster));

	return (
		<ToasterContainer
			autoHideDuration={3000}
			placement={PLACEMENT.bottomRight}
			overrides={{ Root: { style: { zIndex: 999 } } }}
		>
			{toast}
		</ToasterContainer>
	);
}
