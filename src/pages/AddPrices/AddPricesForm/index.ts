import {
	digit,
	number,
	positive,
	required,
	greaterThan0,
	requiredSelect,
} from "services/validate";
import { ReduxFormField } from "components/molecules/ReduxFormFields";
import FormControlInputRedux from "components/organisms/FormControlInputRedux";
import ReduxFieldArray from "components/organisms/ReduxFieldArray";
import FormControlSelectRedux from "components/organisms/FormControlSelectRedux";
import ReduxFormSection from "components/organisms/ReduxFormSection";

export { default } from "./AddPricesForm";

export const fields: ReduxFormField[] = [
	{
		name: "city_name",
		label: "City",
		validate: [required],
		component: FormControlInputRedux,
		cellProps: {
			span: [4, 4, 6],
		},
	},
	{
		name: "class_rates",
		label: "Class Rate",
		component: ReduxFieldArray,
		reduxFormComponent: "FieldArray",
		fieldsArray: [
			{
				name: "class_id",
				label: "Class",
				validate: [requiredSelect],
				component: FormControlSelectRedux,
				options: [
					{ id: "audi", label: "Audi" },
					{ id: "mercedes", label: "Mercedes" },
				],
				cellProps: {
					span: [4, 8, 4],
				},
			},
			{
				name: "waiting_time_cost_per_min",
				label: "Waiting Time Cost Per Min",
				validate: [required, number, positive, digit, greaterThan0],
				component: FormControlInputRedux,
				cellProps: {
					span: [4, 8, 4],
				},
			},
			{
				name: "airport_pickup_cost",
				label: "Airport Pickup Cost",
				validate: [required, number, positive, digit, greaterThan0],
				component: FormControlInputRedux,
				cellProps: {
					span: [4, 8, 4],
				},
			},
			{
				name: "fixed_rates",
				label: "Fixed Rate",
				component: ReduxFieldArray,
				reduxFormComponent: "FieldArray",
				fieldsArray: [
					{
						name: "price",
						label: "Price",
						validate: [required, number, positive, greaterThan0],
						component: FormControlInputRedux,
						cellProps: {
							span: [4, 4, 6],
						},
					},
					{
						name: "currency",
						label: "Currency",
						validate: [required],
						component: FormControlInputRedux,
						cellProps: {
							span: [4, 4, 6],
						},
					},
					{
						name: "min_distance",
						label: "Min Distance",
						validate: [required, number, positive, digit, greaterThan0],
						component: FormControlInputRedux,
						cellProps: {
							span: [4, 4, 6],
						},
					},
					{
						name: "max_distance",
						label: "Max Distance",
						validate: [required, number, positive, digit, greaterThan0],
						component: FormControlInputRedux,
						cellProps: {
							span: [4, 4, 6],
						},
					},
				],
			},
			{
				name: "hourly_rates",
				label: "Hourly Rates",
				component: ReduxFormSection,
				reduxFormComponent: "FormSection",
				fieldsArray: [
					{
						name: "per_hour",
						label: "Per Hour",
						validate: [required, number, positive, digit, greaterThan0],
						component: FormControlInputRedux,
						cellProps: {
							span: [4, 4, 6],
						},
					},
					{
						name: "currency",
						label: "Currency",
						validate: [required],
						component: FormControlInputRedux,
						cellProps: {
							span: [4, 4, 6],
						},
					},
				],
			},
		],
	},
];
