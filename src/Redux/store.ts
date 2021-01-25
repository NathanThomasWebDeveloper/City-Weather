import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import reducer from './reducer';

let store: () => void;

const middleware = [thunk];
const enhancers = [];

const devToolsExtension = ((window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()) || compose;
if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension)
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

// @ts-ignore
store = createStore(
    reducer,
    initialState,
    composedEnhancers
)


export default store;