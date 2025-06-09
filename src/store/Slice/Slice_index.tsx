import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {act} from 'react';

interface UserState {
  userData: any;
  itemData: any;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  refreshTokenExpiry: number | null;
}

const initialUserState: UserState = {
  userData: null,
  itemData: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  refreshTokenExpiry: null,
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
        refreshToken: string;
        expiry: number;
      }>,
    ) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.refreshTokenExpiry = Date.now() + action.payload.expiry * 1000;
      state.isAuthenticated = true;
    },
    logout(state: UserState) {
      state.accessToken = null;
      state.refreshToken = null;
      state.refreshTokenExpiry = null;
      state.isAuthenticated = false;
      state.userData = null;
      state.itemData = [];
      AsyncStorage.removeItem('accessToken');
    },
    setUserData(state: UserState, action: PayloadAction<any>) {
      state.userData = action.payload.userData;
      state.isAuthenticated = true;
    },
    setUserDataInformation(state: UserState, action: PayloadAction<any>) {
      state.userData = action.payload.user;
    },
    setItemData(state: UserState, action: PayloadAction<any>) {
      state.itemData = action.payload;
    },
  },
});
export const {login, logout, setUserData, setItemData, setUserDataInformation} =
  userSlice.actions;
export const userReducer = userSlice.reducer;
