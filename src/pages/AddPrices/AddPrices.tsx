import AddPricesForm from "./AddPricesForm";

export default function AddPrices() {
	const handleSubmit = async (values: any) => {
		console.log("values", values);
	};

	return (
		<>
			<h2>Add Prices</h2>
			<AddPricesForm onSubmit={handleSubmit} />
		</>
	);
}
