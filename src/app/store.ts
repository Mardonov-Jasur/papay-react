import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import HomePageReducer from './screens/HomePage/slice';
import reduxLOgger from "redux-logger";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(reduxLOgger),
  reducer: {
    homePage: HomePageReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
