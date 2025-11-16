import { createAsyncThunk } from '@reduxjs/toolkit';

import type { UserProfile } from '@/types/profile';

export const fetchProfileByUsername = createAsyncThunk(
  'profile/fetchByUsername',
  async (username: string, { rejectWithValue }) => {
    try {
      console.log('Fetching profile for username:', username);

      const data = {
        _id: '1',
        name: 'Phan Văn Duyên',
        username: 'duyenphan',
        email: 'phanvanduyen01022002@gmail.com',

        avatar: 'https://img.daisyui.com/images/profile/demo/superperson@192.webp',

        bio: 'Frontend Developer • UI/UX • React & Tailwind',
        location: 'Hà Nội, Việt Nam',
        website: 'https://your-portfolio.com',

        verified: true,
        role: 'user', // user | admin
        provider: 'local', // local | google | facebook | github

        stats: {
          posts: 54,
          followers: 834,
          following: 162,
        },

        createdAt: '2022-01-01T00:00:00.000Z',
        updatedAt: '2022-01-01T00:00:00.000Z',
      };

      return data as UserProfile;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
