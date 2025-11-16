import { createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';

import { fetchProfileByUsername } from '@/store/slices/profileSlice/profileThunk';
import type { UserProfile } from '@/types/profile';

interface IProfile {
  user: UserProfile;
  loading: boolean;
  error: string | null;
}

const profileState: IProfile = {
  user: {} as UserProfile,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'Profile',
  initialState: profileState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfileByUsername.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    builder
      .addMatcher(isPending(fetchProfileByUsername), (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(isFulfilled(fetchProfileByUsername), (state) => {
        state.loading = false;
      })
      .addMatcher(isRejected(fetchProfileByUsername), (state, action) => {
        state.loading = false;
        state.error = action.payload! as string;
      });
  },
});

export default profileSlice.reducer;
