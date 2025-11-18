import { Link } from 'react-router-dom';

import CameraStrokeIcon from '@/assets/icons/camera-stroke.svg?react';
import GridIcon from '@/assets/icons/grid-icon.svg?react';
import MessageStrokeIcon from '@/assets/icons/message-stroke.svg?react';
import PlusIcon from '@/assets/icons/plus-icon.svg?react';
import StoryIcon from '@/assets/icons/story-icon.svg?react';
import InstagramLogo from '@/assets/logos/instagram.svg?react';

function MainHeader() {
  return (
    <div className="app-header">
      <div className="flex-1">
        <CameraStrokeIcon />
      </div>

      <InstagramLogo className="mt-1 w-[105px]" />

      <div className="flex flex-1 items-center justify-end gap-4.5">
        <details className="dropdown dropdown-end">
          <summary className="btn p-0">
            <PlusIcon />
          </summary>
          <ul className="menu dropdown-content rounded-box z-1 w-31 rounded-xl bg-[#262626] px-2 py-1 text-base shadow-sm">
            <li>
              <Link to="/post/create/style" className="mb-1 flex items-center justify-between">
                <span>Bài Viết</span> <GridIcon className="h-5.5 w-5.5" />
              </Link>
            </li>
            <li>
              <Link to="/create-story" className="flex items-center justify-between">
                <span>Tin</span> <StoryIcon />
              </Link>
            </li>
          </ul>
        </details>
        <MessageStrokeIcon />
      </div>
    </div>
  );
}

export default MainHeader;
