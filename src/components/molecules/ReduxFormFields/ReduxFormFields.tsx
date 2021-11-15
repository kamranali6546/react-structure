import { ReduxFormFieldProps } from ".";
import { Cell, Grid } from "baseui/layout-grid";
import ReduxFormComponent from "components/atoms/ReduxFormComponent";

export default function ReduxFormFields({
	member,
	fields,
}: ReduxFormFieldProps) {
	return (
		<Grid gridMargins={0} gridGutters={8}>
			{fields.map(
				({ cellProps, reduxFormComponent, ...field }: any, index: number) => (
					<Cell key={index} span={[4, 8, 12]} {...cellProps}>
						<ReduxFormComponent
							reduxFormComponent={reduxFormComponent}
							{...field}
							name={member ? `${member}.${field.name}` : field.name}
						/>
					</Cell>
				)
			)}
		</Grid>
	);
}
