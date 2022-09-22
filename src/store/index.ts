import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { api } from 'src/utils/api';
import storage from 'redux-persist/lib/storage'
import rootReducer from 'src/store/rootReducers'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: [''],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware);
  },
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };