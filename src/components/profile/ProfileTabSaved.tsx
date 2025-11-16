import { useSelector } from 'react-redux';

import CopyIcon from '@/assets/icons/copy-icon.svg?react';
import VideoIcon from '@/assets/icons/video-icon.svg?react';
import type { RootState } from '@/store';

interface ProfileTabSavedProps {
  tabIndex: number;
}

function ProfileTabSaved({ tabIndex }: ProfileTabSavedProps) {
  const { savedPosts } = useSelector((state: RootState) => state.profile);
  return (
    <div
      className={`transition-all duration-300 ${tabIndex === 0 ? 'w-full' : 'w-0'} grid grid-cols-3`}
    >
      {savedPosts.length > 0 ? (
        savedPosts.map((savedPost) => (
          <div key={savedPost.postId} className="relative flex h-54 w-full items-center">
            <img
              className="h-full w-full bg-cover bg-center object-cover"
              src={savedPost.thumbnailUrl}
            />

            <div className="absolute top-2 right-2">
              {savedPost.type === 'video' && <VideoIcon />}
              {savedPost.type === 'carousel' && <CopyIcon />}
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-3 flex h-80 w-full items-center justify-center">
          <span className="text-gray-500">No saved posts</span>
        </div>
      )}
    </div>
  );
}

export default ProfileTabSaved;
