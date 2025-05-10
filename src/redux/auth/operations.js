import { createAsyncThunk } from '@reduxjs/toolkit';
import { logOutSuccess } from './authSlice';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.goit.global/';


// Логін
export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      console.log('API baseURL:', axios.defaults.baseURL);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


// Реєстрація
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Вихід
export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      dispatch(logOutSuccess());
      delete axios.defaults.headers.common.Authorization;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Оновлення даних поточного користувача
export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    if (!token) {
      return rejectWithValue('No token available');
    }
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
