import {createStore} from "redux";
import companyReducer from "./reducers/companyReducer";

// const middleware = [thunk, logger];

export const store = createStore(companyReducer);