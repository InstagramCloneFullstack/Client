import type { User } from '@/types/user';

export interface UserStats {
  posts: number;
  followers: number;
  following: number;
}

export interface UserProfile extends User {
  stats: UserStats;
}

export interface ProfilePostGridItem {
  id: string;
  thumbnailUrl: string;
  type: 'image' | 'video' | 'carousel';
}
