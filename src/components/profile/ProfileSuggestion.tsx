import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Avatar from '@/components/Avatar';
import type { RootState } from '@/store';

function ProfileSuggestion() {
  const { userSugestions } = useSelector((state: RootState) => state.suggestion);
  console.log(userSugestions);

  return (
    <div className="mt-3 px-4">
      <div className="flex items-center justify-between">
        <p>Khám phá mọi người</p>
        <Link to={'#'} className="text-cblue-200">
          Xem tất cả
        </Link>
      </div>

      <div className="hide-scrollbar mt-3 flex w-full min-w-0 flex-nowrap gap-2 overflow-x-auto">
        {userSugestions.length > 0 &&
          userSugestions.map((user) => (
            <div
              key={user._id}
              className="flex w-38 shrink-0 flex-col items-center gap-2 rounded-sm bg-black p-4"
            >
              <Avatar src={user.avatar} size={92} className="w-fit" />
              <p className="font-semibold">{user.name}</p>
              <p className="text-xs text-gray-400">Gợi ý cho bạn</p>
              <div className="bg-cblue-200 flex h-6 w-full items-center justify-center rounded-sm font-semibold">
                Theo dõi
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProfileSuggestion;
