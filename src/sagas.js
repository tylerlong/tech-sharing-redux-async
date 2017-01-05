import { delay } from 'redux-saga'
import { takeEvery } from 'redux-saga/effects'
import { put } from 'redux-saga/effects'
import { displayReviews } from './actions'

function* fetchReviewsAsync(action) {
  yield delay(2000)
  const response = yield fetch(`data/${action.id}.json`)
  const content = yield response.text()
  yield put(displayReviews(action.name, content))
}

function* watcherSaga() {
  yield takeEvery('FETCH_REVIEWS_ASYNC', fetchReviewsAsync)
}

function* rootSaga() {
  yield [
    watcherSaga()
  ]
}

export default rootSaga


// export const fetchReviews = (id, name) => {
//   return async (dispatch) => {
//     console.log('this.fetchReviews');
//     await timeout(1000)
//     const response = await fetch(`data/${id}.json`)
//     const content = await response.text()
//     dispatch(displayReviews(name, content))
//   }
// }
