import { createLogic } from 'redux-logic'
import { displayReviews } from './actions'
import { timeout } from './lib'

const fetchReviewsAsyncLogic = createLogic({
  type: 'FETCH_REVIEWS_ASYNC',
  async process({ getState, action }, dispatch, done) {
    await timeout(2000)
    const response = await fetch(`data/${action.id}.json`)
    const content = await response.text()
    dispatch(displayReviews(action.name, content))
  }
})

export default [
  fetchReviewsAsyncLogic
]
