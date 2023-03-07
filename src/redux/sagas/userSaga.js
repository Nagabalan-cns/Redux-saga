import { call, put, takeEvery } from "redux-saga/effects"
const apiUrl = "https://jsonplaceholder.typicode.com/users";

function getApi(){
    return fetch(apiUrl,{
method:"GET",
headers:{
    'content-type': 'application/json'
}
    }).then(response => response.json)
    .catch((error) => {throw error})
}

function* fetchusers(){
try{
const users = yield call(getApi)
yield put ({ type: 'GET_USER_SUCCESS',  users: users})
}
catch (e){
    yield put ({ type: 'GET_USER_ERROR', message: e.message})

}
}

function* userSaga(){
yield takeEvery("GET_USER_REQUEST", fetchusers);
}

export default userSaga;