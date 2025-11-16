import type { IMedia, IPost } from '@/types/post';
import type { User } from '@/types/user';

export interface UserStats {
  posts: number;
  followers: number;
  following: number;
}

export interface UserProfile extends User {
  stats: UserStats;
}

export interface PostThumbnail {
  postId: IPost['id'];
  thumbnailUrl: IMedia['thumbnailUrl'];
  type: IMedia['type'];
}
