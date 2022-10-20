import {configureStore} from '@reduxjs/toolkit';
import devices from './devicesSlice';

const store = configureStore({
  reducer: {
    devices,
  },
});

export default store;
