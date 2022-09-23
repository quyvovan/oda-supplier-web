import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { api } from 'src/utils/api';
// import storage from 'redux-persist/lib/storage'
import rootReducer from 'src/store/rootReducers';
import { createWrapper } from 'next-redux-wrapper';

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   whitelist: [''],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = () => configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware);
  },
});


export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const StoreWrapper = createWrapper<AppStore>(store, { debug: true });