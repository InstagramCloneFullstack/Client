import { createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';

import {
  fetchProfileByUsername,
  fetchSavedPostsProfile,
} from '@/store/slices/profileSlice/profileThunk';
import type { PostThumbnail, UserProfile } from '@/types/profile';

interface IProfile {
  user: UserProfile;
  savedPosts: PostThumbnail[];
  loading: boolean;
  error: string | null;
}

const profileState: IProfile = {
  user: {} as UserProfile,
  savedPosts: [],
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
    builder.addCase(fetchSavedPostsProfile.fulfilled, (state, action) => {
      // Xử lý dữ liệu bài viết đã lưu nếu cần
      state.savedPosts = action.payload;
    });

    builder
      .addMatcher(isPending(fetchProfileByUsername, fetchSavedPostsProfile), (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(isFulfilled(fetchProfileByUsername, fetchSavedPostsProfile), (state) => {
        state.loading = false;
      })
      .addMatcher(isRejected(fetchProfileByUsername, fetchSavedPostsProfile), (state, action) => {
        state.loading = false;
        state.error = action.payload! as string;
      });
  },
});

export default profileSlice.reducer;
