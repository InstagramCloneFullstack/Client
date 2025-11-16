import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileInfor from '@/components/profile/ProfileInfor';
import ProfileSuggestion from '@/components/profile/ProfileSuggestion';
import ProfileTabs from '@/components/profile/ProfileTabs';
import type { AppDispatch } from '@/store';
import {
  fetchProfileByUsername,
  fetchSavedPostsProfile,
} from '@/store/slices/profileSlice/profileThunk';
import { getUsersSuggestion } from '@/store/slices/suggestionSlice/suggestionThunk';

function Profile() {
  const { username } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (username) {
      dispatch(fetchProfileByUsername(username));
      dispatch(getUsersSuggestion(username));
      dispatch(fetchSavedPostsProfile(username));
    }
  }, [username]);

  return (
    <div className="bg-base-300 min-h-full">
      <ProfileHeader username={username} />
      <ProfileInfor />
      <ProfileSuggestion />
      <ProfileTabs />
    </div>
  );
}

export default Profile;
