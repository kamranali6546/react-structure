import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import classReducer from "./slices/class/classSlice";

const rootReducer = combineReducers({
	form: formReducer,

	classes: classReducer,
});

export default rootReducer;
