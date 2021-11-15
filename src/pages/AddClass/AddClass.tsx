import AddClassForm from "./AddClassForm";
import ClassService from "services/class.service";
import CircleLoader from "components/atoms/CircleLoader";
import { useAppDispatch, useAppSelector } from "redux/hooks";

export default function AddClass() {
	const dispatch = useAppDispatch();
	const loading = useAppSelector((state) => state.classes.loading);

	const handleSubmit = async (values: any) => {
		console.log("values", values);

		ClassService.addClass(values, dispatch);
	};

	return (
		<>
			<h2>Add Class</h2>
			<AddClassForm onSubmit={handleSubmit} />
			{loading && <CircleLoader />}
		</>
	);
}
