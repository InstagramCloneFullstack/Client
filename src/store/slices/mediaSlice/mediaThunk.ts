import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Upload 1 file
export const uploadImage = createAsyncThunk(
  'cloudinary/uploadImage',
  async (file: File, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'upload-pvd'); // đổi thành preset của bạn

      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dmadria9a/image/upload',
        formData
      );

      return response.data; // Cloudinary trả về url, public_id, ...
    } catch (err: any) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const uploadMultipleImages = createAsyncThunk(
  'cloudinary/uploadMultipleImages',
  async (files: File[], { rejectWithValue }) => {
    try {
      const uploadPromises = files.map((file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'upload-pvd');
        return axios.post('https://api.cloudinary.com/v1_1/dmadria9a/image/upload', formData);
      });

      const results = await Promise.all(uploadPromises);
      return results.map((res) => res.data);
    } catch (err: any) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
