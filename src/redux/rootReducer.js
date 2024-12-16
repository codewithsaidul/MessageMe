import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./slices/app"
import authReducer from "./slices/auth";
import toastReducer from "./slices/toast";
import usersReducer from "./slices/users";
import conversationReducer from "./slices/conversations";


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
    auth: authReducer,
    toast: toastReducer,
    users: usersReducer,
    conversation: conversationReducer,
})



export { rootPersistConfig, rootReducer}