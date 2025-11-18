import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import counterReducer from './slices/counterSlice';
import mediaReducer from './slices/mediaSlice';
import postReducer from './slices/postSlice';
import profileReducer from './slices/profileSlice';
import socketReducer from './slices/socketSlice';
import suggestionReducer from './slices/suggestionSlice';
import toastReducer from './slices/toastSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    post: postReducer,
    counter: counterReducer,
    user: userReducer,
    auth: authReducer,
    toasts: toastReducer,
    socket: socketReducer,
    profile: profileReducer,
    suggestion: suggestionReducer,
    media: mediaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
