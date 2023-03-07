import { combineReducers } from "redux";
import users from "./user";
const rootreducer = combineReducers({
users: users,
})

export default rootreducer;