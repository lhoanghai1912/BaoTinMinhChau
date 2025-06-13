import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {act} from 'react';

interface UserState {
  userData: any;
  accessToken: string | null;
}

const initialUserState: UserState = {
  userData: null,
  accessToken: null,
};

// Tạo slice cho user
const userSlice = createSlice({
  name: 'user_Slice',
  initialState: initialUserState,
  reducers: {
    login(
      state: UserState,
      action: PayloadAction<{
        accessToken: string;
      }>,
    ) {
      state.accessToken = action.payload.accessToken;
    },
    logout(state) {
      state.accessToken = null;
      AsyncStorage.removeItem('accessToken');
    },
    setUserData(state: UserState, action: PayloadAction<any>) {
      state.userData = action.payload.userData;
    },
    setUserDataInformation(state: UserState, action: PayloadAction<any>) {
      state.userData = action.payload.user;
    },
    setItemData(state: UserState, action: PayloadAction<any>) {},
  },
});
export const {login, logout, setUserData, setItemData, setUserDataInformation} =
  userSlice.actions;
export const userReducer = userSlice.reducer;
