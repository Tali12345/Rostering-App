import { configureStore } from "@reduxjs/toolkit";
import { rosteringSlice } from './features/rosteringSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { apiStorage } from './apiStorage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: apiStorage
};

const persistedReducer = persistReducer(persistConfig, rosteringSlice.reducer);

const store = configureStore({
  reducer: {
    rostering: persistedReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
});

export const persistor = persistStore(store);

export default store;
