import { call, put, takeEvery } from 'redux-saga/effects';
import getUsersApi from '../../api/users';
import { getUsersFailed, getUsersSuccess } from './actions';
import { GET_USERS } from './actionTypes';

function* fetchUsers() {
  try {
    const users = yield call(getUsersApi);
    // eslint-disable-next-line no-console
    // console.log('************* saga ***********');
    // console.log(users);
    yield put(getUsersSuccess(users));
  } catch (e) {
    yield put(getUsersFailed(e));
  }
}

function* userSaga() {
  yield takeEvery(GET_USERS, fetchUsers);
}

export default userSaga;
