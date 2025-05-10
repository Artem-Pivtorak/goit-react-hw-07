// src/redux/contacts/operations.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../../services/api';


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
