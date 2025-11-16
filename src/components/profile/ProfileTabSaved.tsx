interface ProfileTabSavedProps {
  tabIndex: number;
}

function ProfileTabSaved({ tabIndex }: ProfileTabSavedProps) {
  return (
    <div
      className={`transition-all duration-300 ${tabIndex === 0 ? 'w-full' : 'w-0'} grid grid-cols-3`}
    >
      <div className="flex h-54 w-full items-center">
        <img
          className="h-full w-full bg-cover bg-center object-cover"
          src="https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/482812ZYV/anh-mo-ta.png"
        />
      </div>
      <div className="flex h-54 w-full items-center">
        <img
          className="h-full w-full bg-cover bg-center object-cover"
          src="https://hnsofa.com/wp-content/uploads/2023/03/chiem-nguong-50-hinh-anh-phong-canh-buon-tam-trang-cuc-dep_15.jpg"
        />
      </div>
      <div className="flex h-54 w-full items-center">
        <img
          className="h-full w-full bg-cover bg-center object-cover"
          src="https://cdn-media.sforum.vn/storage/app/media/ctvseo_MH/%E1%BA%A3nh%20phong%20c%E1%BA%A3nh%20%C4%91%E1%BA%B9p/anh-phong-canh-dep-1.jpg"
        />
      </div>
      <div className="flex h-54 w-full items-center">
        <img
          className="h-full w-full bg-cover bg-center object-cover"
          src="https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2024/02/anh-phong-canh-66-1.jpg"
        />
      </div>
      <div className="flex h-54 w-full items-center">
        <img
          className="h-full w-full bg-cover bg-center object-cover"
          src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/10/tai-anh-phong-canh-dep-1.jpg"
        />
      </div>
      <div className="flex h-54 w-full items-center">
        <img
          className="h-full w-full bg-cover bg-center object-cover"
          src="https://i.pinimg.com/564x/db/35/2e/db352eb4ab57142bfb33692649062e75.jpg"
        />
      </div>
    </div>
  );
}

export default ProfileTabSaved;
