import { createAsyncThunk } from '@reduxjs/toolkit';

import type { PostThumbnail, UserProfile } from '@/types/profile';

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

export const fetchSavedPostsProfile = createAsyncThunk(
  'profile/fetchSavedPosts',
  async (username: string, { rejectWithValue }) => {
    try {
      console.log('Fetching saved posts for username:', username);

      const data: PostThumbnail[] = [
        {
          postId: 'saved_001',
          thumbnailUrl:
            'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/482812ZYV/anh-mo-ta.png',
          type: 'video',
        },
        {
          postId: 'saved_002',
          thumbnailUrl:
            'https://hnsofa.com/wp-content/uploads/2023/03/chiem-nguong-50-hinh-anh-phong-canh-buon-tam-trang-cuc-dep_15.jpg',
          type: 'image',
        },
        {
          postId: 'saved_003',
          thumbnailUrl:
            'https://cdn-media.sforum.vn/storage/app/media/ctvseo_MH/%E1%BA%A3nh%20phong%20c%E1%BA%A3nh%20%C4%91%E1%BA%B9p/anh-phong-canh-dep-1.jpg',
          type: 'carousel',
        },
        {
          postId: 'saved_004',
          thumbnailUrl:
            'https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2024/02/anh-phong-canh-66-1.jpg',
          type: 'image',
        },
        {
          postId: 'saved_005',
          thumbnailUrl:
            'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/10/tai-anh-phong-canh-dep-1.jpg',
          type: 'video',
        },
        {
          postId: 'saved_006',
          thumbnailUrl: 'https://i.pinimg.com/564x/db/35/2e/db352eb4ab57142bfb33692649062e75.jpg',
          type: 'carousel',
        },
      ];

      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
