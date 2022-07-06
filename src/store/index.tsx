import {combineReducers, createStore} from "redux";
import {storeReducer} from "./reducers/storeReducer";
import {basketReducer} from "./reducers/basketReducer";

{/* GET ALL REDUCERS*/}
const rootStore = combineReducers({
    store: storeReducer,
    basket: basketReducer
})

export const store = createStore(rootStore)

{/*---- Create useSelector hook to typescript----*/}
export type useTypedSelector = ReturnType<typeof rootStore>