import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'

// import { thunk } from 'redux-thunk'
// import createSagaMiddleware from 'redux-saga'
// import rootSaga from './sagas'

import { createLogicMiddleware } from 'redux-logic'
import logic from './logics'

const logicMiddleware = createLogicMiddleware(logic)


const store = createStore(
  reducer,
  applyMiddleware(logicMiddleware)
)


// sagaMiddleware.run(rootSaga)


export default store
