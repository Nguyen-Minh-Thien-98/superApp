import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './src/Features/user';
import themeReducer from './src/Features/theme';
// Screens
import Profile from './src/Screeens/Profile';

const myStore = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  }
})

const App = () => {
  return (
    <Provider store={myStore}>
      <Profile />
    </Provider>
  )
}

export default App;