import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, configureStore } from '@reduxjs/toolkit';
import { addMessage, chatReducer, messagesReducer, profileReducer, userReducer } from '../slices/slices';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    chats: chatReducer,
    profile: profileReducer,
    messages: messagesReducer,
    user: userReducer
})

const reducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: reducer
},
    composeEnhancers(applyMiddleware(thunk))
)

export const persistor = persistStore(store);
