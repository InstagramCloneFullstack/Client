import ChrvonDownIcon from '@/assets/icons/chvron-down.svg?react';
import MenuIcon from '@/assets/icons/menu.svg?react';

interface ProfileHeaderProps {
  username?: string;
}

function ProfileHeader({ username }: ProfileHeaderProps) {
  return (
    <div className="flex h-11 w-full items-center justify-between px-4">
      <span className="flex items-center gap-1 font-semibold">
        {username}
        <ChrvonDownIcon />
      </span>
      <MenuIcon />
    </div>
  );
}

export default ProfileHeader;
