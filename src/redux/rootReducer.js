import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./slices/app"


// Slices
const rootPersistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'redux-',
    // white List [],
    // Black List []
}


const rootReducer = combineReducers({
    app: appReducer,
})

export { rootPersistConfig, rootReducer}