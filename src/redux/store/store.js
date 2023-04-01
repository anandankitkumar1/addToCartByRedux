import {createStore} from "redux";
import rootReducer from "../reducer";

const myStore = createStore(rootReducer);

export default myStore;