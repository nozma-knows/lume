import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  devices: [],
};

export const devicesSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    updateDevices: (state = initialState, action) => {
      return {
        ...state,
        devices: [...state.devices, action.payload],
      };
    },
  },
});

export const {updateDevices} = devicesSlice.actions;

export default devicesSlice.reducer;
