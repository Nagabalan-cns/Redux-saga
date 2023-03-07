import * as type from "../type"

export function  getUser(users) {
return {
    type: type.GET_USER_REQUEST,
    payload: users,
}
}