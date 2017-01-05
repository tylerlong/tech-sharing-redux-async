import { combineReducers } from 'redux'


const defaultApps = [
  { id: 715886894, name: 'Glip' },
  { id: 293305984, name: 'RingCentral' },
  { id: 688920955, name: 'RingCentral Meetings' },
]

const apps = (state = defaultApps, action) => {
  switch (action.type) {
    case 'DELETE_APP':
      return state.filter((app) => app.id !== action.id)
    default:
      return state
  }
}
const reviews = (state = { name: '', content: '' }, action) => {
  switch (action.type) {
    case 'DISPLAY_REVIEWS':
      return { name: action.name, content: action.content }
    default:
      return state
  }
}


const combinedReducers = combineReducers({
  apps,
  reviews
});

export default combinedReducers
