// reducers.js
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { counterSlice } from './Slices/CounterSlice';
import { draftSlice } from './Slices/DraftSlice';
import { playersSlice } from './Slices/PlayersSlice';
import { History } from 'history';

const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    counter: counterSlice.reducer,
    draft: draftSlice.reducer,
    players: playersSlice.reducer
})
export default createRootReducer