export const deleteApp = (id) => {
  return { type: 'DELETE_APP', id }
}


export const displayReviews = (name, content) => {
  return { type: 'DISPLAY_REVIEWS', name, content }
}
