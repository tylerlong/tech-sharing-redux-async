import { timeout } from './lib'
import store from './store'

export const deleteApp = (id) => {
  return { type: 'DELETE_APP', id }
}


export const displayReviews = (name, content) => {
  return { type: 'DISPLAY_REVIEWS', name, content }
}

export const fetchReviews = async (id, name) => {
  console.log('this.fetchReviews');
  await timeout(1000)
  const response = await fetch(`data/${id}.json`)
  const content = await response.text()
  store.dispatch(displayReviews(name, content))
}
