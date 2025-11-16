import { createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';

import { getUsersSuggestion } from '@/store/slices/suggestionSlice/suggestionThunk';
import type { ISuggestion } from '@/types/suggestion';

interface ISuggestionState {
  userSugestions: ISuggestion[];
  loading: boolean;
  error: string | null;
}

const initSuggestionState: ISuggestionState = {
  userSugestions: [],
  loading: false,
  error: null,
};

const suggestionSlice = createSlice({
  name: 'suggestion',
  initialState: initSuggestionState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersSuggestion.fulfilled, (state, action) => {
      state.userSugestions = action.payload;
    });
    builder
      .addMatcher(isPending(), (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(isFulfilled(), (state) => {
        state.loading = false;
      })
      .addMatcher(isRejected(), (state, action) => {
        state.loading = false;
        state.error = action.payload! as string;
      });
  },
});

export default suggestionSlice.reducer;
