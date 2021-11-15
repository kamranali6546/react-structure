export const number = (value: any) =>
	value && isNaN(Number(value)) ? "Must be a number" : undefined;

export const positive = (value: any) =>
	value && Number(value) < 0 ? "Must be positive" : undefined;

export const greaterThan0 = (value: any) =>
	value && Number(value) === 0 ? "Must be greater than 0" : undefined;

export const digit = (value: any) =>
	value && value.toString().indexOf(".") !== -1 ? "Must be a digit" : undefined;

export const required = (value: any) =>
	value || typeof value === "number" ? undefined : "Required";

export const requiredSelect = (value: any) =>
	value && value.length > 0 ? undefined : "Required";

export const validateRemaining = (value: any, allValues: any) => {
	return value &&
		Number(allValues.total_remaining) >= 0 &&
		Number(value) > Number(allValues.total_remaining)
		? "Must be less than equal to Total Remaining"
		: undefined;
};

export const email = (value: any) =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? "Invalid email address"
		: undefined;

export const password = (value: any, allValues: any, props: any, name: any) => {
	if (!value) return undefined;

	let value1;

	if (name === "password") value1 = allValues.confirm_password;
	else value1 = allValues.password;

	return value1 && value !== value1
		? `Must be equal to ${
				name === "password" ? "Confirm Password" : "New Password"
		  }`
		: undefined;
};

// const length = (length) => (value) =>
// 	value && value.length !== length ? `Must be ${length} characters` : undefined;

// const maxLength = (max) => (value) =>
// 	value && value.length > max ? `Must be ${max} characters or less` : undefined;

// const minLength = (min) => (value) =>
// 	value && value.length < min ? `Must be ${min} characters or more` : undefined;

// export const length4 = length(4);
// export const minLength5 = minLength(5);
// export const minLength6 = minLength(6);
// export const maxLength15 = maxLength(15);

// export const emailOrPhone = (value) => {
// 	if (value && !isNaN(Number(value))) {
// 		let res = minLength(5)(value);

// 		if (res) return res;
// 		return maxLength(15)(value);
// 	}

// 	return email(value);
// };
