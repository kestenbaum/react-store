import {combineReducers, createStore} from "redux";
import {storeReducer} from "./reducers/storeReducer";

{/* GET ALL REDUCERS*/}
const rootStore = combineReducers({
    store: storeReducer
})

export const store = createStore(rootStore)
export type useTypedSelector = ReturnType<typeof rootStore>