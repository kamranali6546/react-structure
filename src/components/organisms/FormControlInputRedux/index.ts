export { default } from "./FormControlInputRedux";

export interface FormControlInputReduxOwnProps {
	label: React.ReactNode;
	handleBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
	handleFocus?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
}
