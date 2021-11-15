let error: Function, success: Function;

const ToasterService = {
	showSuccess: function (message: string) {
		success?.(message);
	},
	showError: function (message: string) {
		error?.(message);
	},

	subscribe: function (successCallBack: Function, errorCallBack: Function) {
		success = successCallBack;
		error = errorCallBack;
	},
};

export default ToasterService;
