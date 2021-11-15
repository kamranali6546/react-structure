export { default } from "./ReduxFormFields";

type Validator = (value: any, allValues?: any, props?: any, name?: any) => any;

interface CommonFieldProps {
	name: string;
	label: string;
	options?: any;
	cellProps?: any;
	component: React.ReactNode;
}

type FieldProps = CommonFieldProps & {
	placeholder?: string;
	validate?: Validator | Validator[] | undefined;
	fieldsArray?: never;
	reduxFormComponent?: never;
};

type FormSectionProps = CommonFieldProps & {
	reduxFormComponent: "FormSection";
	fieldsArray: ReduxFormField[];
	placeholder?: never;
	validate?: never;
};

type FieldArrayProps = CommonFieldProps & {
	reduxFormComponent: "FieldArray";
	fieldsArray: ReduxFormField[];
	placeholder?: never;
	validate?: never;
};

export type ReduxFormField = FieldProps | FormSectionProps | FieldArrayProps;

export interface ReduxFormFieldProps {
	member?: string;
	fields: ReduxFormField[];
}
