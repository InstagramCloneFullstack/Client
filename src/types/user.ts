export interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  location: string;
  verified: boolean;
  role: 'user' | 'admin';
  provider: 'local' | 'google' | 'facebook';
  createdAt: string;
  updatedAt: string;
}
