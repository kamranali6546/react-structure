import { fields } from ".";
import { reduxForm } from "redux-form";
import Button from "components/atoms/Button";
import ReduxFormFields from "components/molecules/ReduxFormFields";

const AddPricesForm = ({ handleSubmit }: any) => {
	return (
		<form onSubmit={handleSubmit}>
			<ReduxFormFields fields={fields} />

			<Button type="submit">Submit</Button>
		</form>
	);
};

export default reduxForm({ form: "AddPricesForm" })(AddPricesForm);
