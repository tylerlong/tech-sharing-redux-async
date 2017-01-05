// import { timeout } from './lib'

export const deleteApp = (id) => {
  return { type: 'DELETE_APP', id }
}


export const displayReviews = (name, content) => {
  return { type: 'DISPLAY_REVIEWS', name, content }
}


// export const fetchReviews = async (dispatch, id, name) => {
//   console.log('this.fetchReviews');
//   await timeout(1000)
//   const response = await fetch(`data/${id}.json`)
//   const content = await response.text()
//   dispatch(displayReviews(name, content))
// }


export const fetchReviews = (id, name) => {
  return { type: 'FETCH_REVIEWS_ASYNC', id, name }
}
