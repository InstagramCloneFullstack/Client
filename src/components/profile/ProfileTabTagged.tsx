import TagsIcon from '@/assets/icons/tags-icon.svg?react';

interface ProfileTabTaggedProps {
  tabIndex: number;
}

function ProfileTabTagged({ tabIndex }: ProfileTabTaggedProps) {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ${tabIndex === 0 ? 'w-0' : 'w-full'}`}
    >
      <div className={`flex flex-col items-center gap-6 py-10`}>
        <div className="mx-auto flex w-fit items-center justify-center rounded-full border-4 border-gray-400 p-8 text-gray-400">
          <TagsIcon className="h-16 w-16" />
        </div>
        <p className="max-h-8 text-2xl font-bold">Ảnh và Video có mặt bạn</p>
        <p className="mx-auto inline-block max-h-10 w-full max-w-[340px] text-center leading-[1.25rem] text-gray-400">
          Ảnh và video mà mọi người gắn thẻ bạn sẽ hiển thị ở đây
        </p>
      </div>
    </div>
  );
}

export default ProfileTabTagged;
