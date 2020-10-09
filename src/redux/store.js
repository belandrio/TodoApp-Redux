import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import todoReducer from '../redux/reducers/todoReducer';
 
const initialState = {};
 
const middleware = [thunk];
 
const store = createStore(
 todoReducer,
 initialState,
 compose(
 applyMiddleware(...middleware),
   window.__REDUX_DEVTOOLS_EXTENSION__ 
   && window.__REDUX_DEVTOOLS_EXTENSION__()
 )
);
 
export default store;
