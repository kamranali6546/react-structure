export default class Promisable {
	static asPromise(promise: Promise<unknown>) {
		let response = { error: null, success: null };

		return new Promise((resolve) => {
			promise.then(
				(res: any) => {
					// log("res", res);
					response.success = res;
					resolve(response);
				},
				(err: any) => {
					// log("err", err);
					response.error = err;
					resolve(response);
				}
			);
		});
	}
}
