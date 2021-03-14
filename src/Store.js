import { createStore, applyMiddleware, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import AccountReducer from './Acoounts/AccountsReducer'
import AuthREducer from './Auth/AuthReducer'
import BankReducer from './Bank/BankReducer'


const RootReducer = combineReducers({
    Banks : BankReducer,
    Accounts : AccountReducer,
    Auth : AuthREducer
})




const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default Store;