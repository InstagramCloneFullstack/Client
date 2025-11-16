import { createAsyncThunk } from '@reduxjs/toolkit';

import { authService } from '@/api/authService';
import type { User } from '@/types/user';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }, thunkAPI) => {
    try {
      const { data } = await authService.login(email, password);
      return data;
    } catch (_error) {
      return thunkAPI.rejectWithValue('Login failed');
    }
  }
);

export const loginWithGoogle = createAsyncThunk(
  'auth/loginWithGoogle',
  async (access_token: string, thunkAPI) => {
    try {
      const { data } = await authService.loginWithGoogle(access_token);
      return data;
    } catch (_error) {
      return thunkAPI.rejectWithValue('Login failed');
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (dataRegister: { name: string; email: string; password: string }, thunkAPI) => {
    try {
      const { data } = await authService.register(dataRegister);
      return data;
    } catch (_error) {
      return thunkAPI.rejectWithValue('register failed');
    }
  }
);

export const getProfile = createAsyncThunk('auth/profile', async (_, thunkAPI) => {
  try {
    // const { data } = await authService.profile();
    const fakeUser: User = {
      _id: 'u1',
      name: 'Phan Văn Duyên',
      username: 'MeoConQT0',
      email: 'vana@example.com',
      verified: true,
      location: 'Viet Nam',
      avatar:
        'https://scontent.fdad1-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s480x480&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeGqUY1_agMpZSr1qr34TXFfWt9TLzuBU1Ba31MvO4FTUFgfchLkeD7mWiHFKemVnAcFTUEVS6ZsoKEUs5ppnF59&_nc_ohc=dcQJzN7K8wEQ7kNvwGiUaW7&_nc_oc=Adnc9cplMnDWwAeQmYgvgtkq_uARliESLvw4rz95szB5pXWo4r2twDzQEfBn8xpO4whk6iCmj3WK9zFNyUMDQ3a9&_nc_zt=24&_nc_ht=scontent.fdad1-1.fna&oh=00_AfiHVPuxi44Zndb12xXFqioLwq3diKexAovqFkAkzYxB4w&oe=693E7B3A',
      role: 'user', // ✅ TS hiểu đúng literal
      provider: 'local', // ✅
      createdAt: '2024-10-01T10:20:30Z',
      updatedAt: '2024-10-01T10:20:30Z',
    };
    return fakeUser;
  } catch (_error) {
    return thunkAPI.rejectWithValue('fetch profile failed');
  }
});

export const refreshToken = createAsyncThunk('auth/refresh-token', async (_, thunkAPI) => {
  try {
    const { data } = await authService.refreshToken();
    return data;
  } catch (_error) {
    return thunkAPI.rejectWithValue('refresh token failed');
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await authService.logout();
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.message);
  }
});
