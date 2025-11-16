import GridIcon from '@/assets/icons/grid-icon.svg?react';
import TagsIcon from '@/assets/icons/tags-icon.svg?react';

interface ProfileTabHeaderProps {
  tabIndex: number;
  setTabIndex: (index: number) => void;
}

function ProfileTabHeader({ tabIndex, setTabIndex }: ProfileTabHeaderProps) {
  return (
    <div className="relative mx-4 mt-[15px] flex h-11 w-auto">
      <div
        className={`flex flex-1 items-center justify-center opacity-60 transition-all duration-300 ${
          tabIndex === 0 && 'opacity-100'
        }`}
        onClick={() => setTabIndex(0)}
      >
        <GridIcon />
      </div>

      <div
        className={`flex flex-1 items-center justify-center opacity-60 transition-all duration-300 ${
          tabIndex === 1 && 'opacity-100'
        }`}
        onClick={() => setTabIndex(1)}
      >
        <TagsIcon />
      </div>

      {/* underline */}
      <div
        className={`absolute bottom-0 h-[2px] w-1/2 bg-gray-200 transition-all duration-300 ${tabIndex === 1 ? 'translate-x-full' : 'translate-x-0'}`}
      ></div>
    </div>
  );
}

export default ProfileTabHeader;
