import { takeEvery } from 'redux-saga/effects'

import * as actionTypes from '../actions/actionTypes'
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from './auth'
import { initBurgerIngredientsSaga } from './burgerBuilder'

// takeEvery listents to certain action and does smth when they occur
export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga)
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga)
    yield takeEvery(actionTypes.AUTH_USER, authUserSaga)
    yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
}

export function* watchBurgerBuilder() {
    yield takeEvery(actionTypes.INIT_BURGER_INGREDIENTS, initBurgerIngredientsSaga)
}