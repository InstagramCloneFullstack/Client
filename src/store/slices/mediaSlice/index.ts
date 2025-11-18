import { createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';

import { uploadImage, uploadMultipleImages } from '@/store/slices/mediaSlice/mediaThunk';

// Định nghĩa kiểu dữ liệu cho một tệp đã tải lên
export interface UploadedFile {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: false;
  url: string;
  secure_url: string;
  asset_folder: string;
  display_name: string;
  existing: false;
  original_filename: string;
  original_extension: string;
}

// Định nghĩa kiểu dữ liệu cho trạng thái slice
export interface MediaState {
  uploadedFiles: UploadedFile[];
  loading: boolean;
  error: string | null;
}

const mediaInitState: MediaState = {
  uploadedFiles: [],
  loading: false,
  error: null,
};

const mediaSlice = createSlice({
  name: 'media',
  initialState: mediaInitState,
  reducers: {
    clearUploadedFiles: (state) => {
      state.uploadedFiles = [];
    },
    handleChangeSingleUpload: (state) => {
      state.uploadedFiles = [state.uploadedFiles[0]];
    },
    handleRemoveFile: (state, action) => {
      console.log(action.payload);

      state.uploadedFiles = state.uploadedFiles.filter((item) => item.asset_id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(uploadImage.fulfilled, (state, action) => {
      state.uploadedFiles = [action.payload];
    });

    builder.addCase(uploadMultipleImages.fulfilled, (state, action) => {
      state.uploadedFiles = [...state.uploadedFiles, ...action.payload];
    });

    builder
      .addMatcher(isPending(uploadImage, uploadMultipleImages), (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(isFulfilled(uploadImage, uploadMultipleImages), (state) => {
        state.loading = false;
      })
      .addMatcher(isRejected(uploadImage, uploadMultipleImages), (state, action) => {
        state.loading = false;
        state.error = action.payload! as string;
      });
  },
});

export const { clearUploadedFiles, handleChangeSingleUpload, handleRemoveFile } =
  mediaSlice.actions;
export default mediaSlice.reducer;
