import { useSelector } from 'react-redux';

import Avatar from '@/components/Avatar';
import type { RootState } from '@/store';

function ProfileInfor() {
  const { user } = useSelector((state: RootState) => state.profile);

  return (
    <>
      <div className="flex items-center px-4">
        <Avatar src={user.avatar} size={96} className="w-fit" />
        <div className="flex flex-1 items-center justify-center gap-10">
          <div className="flex flex-col items-center">
            <p className="leading-[21px] font-semibold">{user.stats?.posts}</p>
            <p className="text-[13px] leading-[34px]">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="leading-[21px] font-semibold">{user.stats?.followers}</p>
            <p className="text-[13px] leading-[34px]">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="leading-[21px] font-semibold">{user.stats?.following}</p>
            <p className="text-[13px] leading-[34px]">Following</p>
          </div>
        </div>
      </div>

      <div className="mt-3 px-4">
        <p>@{user.username}</p>
      </div>

      <div className="mx-4 mt-[15px] flex h-[29px] w-auto items-center justify-center rounded-[6px] bg-black text-[13px] leading-[18px] font-semibold">
        Chỉnh sửa
      </div>
    </>
  );
}

export default ProfileInfor;
