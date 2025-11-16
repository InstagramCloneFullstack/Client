import { createAsyncThunk } from '@reduxjs/toolkit';

const getUsersSuggestion = createAsyncThunk(
  'suggestion/getUsersSuggestion',
  async (username: string, { rejectWithValue }) => {
    console.log('Fetching users suggestion for username:', username);

    try {
      const data = [
        {
          _id: '2',
          username: 'duyenphan',
          name: 'Phan Văn Duyên',
          avatar: 'https://i.pravatar.cc/300?img=18',
        },
        {
          _id: '3',
          username: 'longng',
          name: 'Long Nguyễn',
          avatar: 'https://i.pravatar.cc/300?img=25',
        },
        {
          _id: '5',
          username: 'luan',
          name: 'Luân Nguyễn',
          avatar: 'https://i.pravatar.cc/300?img=26',
        },
        {
          _id: '4',
          username: 'hai',
          name: 'Hai Nguyễn',
          avatar: 'https://i.pravatar.cc/300?img=30',
        },
      ];

      return data;
    } catch (error) {
      return rejectWithValue('Failed to fetch users suggestion: ' + error);
    }
  }
);

export { getUsersSuggestion };
