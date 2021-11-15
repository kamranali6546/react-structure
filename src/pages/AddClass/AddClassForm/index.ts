import {
	digit,
	number,
	positive,
	required,
	greaterThan0,
	requiredSelect,
} from "services/validate";
import ReduxFormSection from "components/organisms/ReduxFormSection";
import { ReduxFormField } from "components/molecules/ReduxFormFields";
import FormControlInputRedux from "components/organisms/FormControlInputRedux";
import TagFormControlInputRedux from "components/organisms/TagFormControlInputRedux";

export { default } from "./AddClassForm";

export const fields: ReduxFormField[] = [
	{
		name: "name",
		label: "Name",
		validate: [required],
		component: FormControlInputRedux,
		cellProps: {
			span: [4, 4, 6],
		},
	},
	{
		name: "includes",
		label: "Includes",
		validate: [required],
		component: FormControlInputRedux,
		cellProps: {
			span: [4, 4, 6],
		},
	},
	{
		name: "max_persons",
		label: "Max Persons",
		validate: [required, number, positive, digit, greaterThan0],
		component: FormControlInputRedux,
		cellProps: {
			span: [4, 4, 6],
		},
	},
	{
		name: "max_bags",
		label: "Max Bags",
		validate: [required, number, positive, digit, greaterThan0],
		component: FormControlInputRedux,
		cellProps: {
			span: [4, 4, 6],
		},
	},
	{
		name: "free_cancellation",
		label: "Free Cancellation",
		validate: [required],
		component: FormControlInputRedux,
		cellProps: {
			span: [4, 4, 6],
		},
	},
	{
		name: "complimentary",
		label: "Complimentary",
		validate: [required],
		component: FormControlInputRedux,
		cellProps: {
			span: [4, 4, 6],
		},
	},
	{
		name: "vehicles",
		label: "Vehicles",
		validate: [requiredSelect],
		placeholder: "Enter a Vehicle",
		component: TagFormControlInputRedux,
	},
	{
		name: "waiting_time",
		label: "Waiting Time",
		component: ReduxFormSection,
		reduxFormComponent: "FormSection",
		fieldsArray: [
			{
				name: "airport",
				label: "Airport",
				validate: [required, number, positive, digit, greaterThan0],
				component: FormControlInputRedux,
				cellProps: {
					span: [4, 4, 6],
				},
			},
			{
				name: "others",
				label: "Others",
				validate: [required, number, positive, digit, greaterThan0],
				component: FormControlInputRedux,
				cellProps: {
					span: [4, 4, 6],
				},
			},
		],
	},
];
