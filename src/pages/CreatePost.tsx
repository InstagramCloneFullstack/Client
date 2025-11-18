import { Plus, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CopyStrokeIcon from '@/assets/icons/copy-stroke.svg?react';
import useToast from '@/hooks/useToast';
import type { AppDispatch, RootState } from '@/store';
import { handleRemoveFile } from '@/store/slices/mediaSlice';
import { uploadImage, uploadMultipleImages } from '@/store/slices/mediaSlice/mediaThunk';

function CreatePost() {
  const dispatch = useDispatch<AppDispatch>();
  const { uploadedFiles, loading, error } = useSelector((state: RootState) => state.media);
  const { showToast } = useToast();

  const [uploadMultiple, setUploadMultiple] = useState<boolean>(false);

  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleSingleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      dispatch(uploadImage(e.target.files[0]));
    }
  };

  const handleMultipleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      dispatch(uploadMultipleImages(filesArray));
    }
  };

  const handleDeleteFileItem = (asset_id: string) => {
    dispatch(handleRemoveFile(asset_id));
  };

  useEffect(() => {
    console.log(inputFileRef);

    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  }, [inputFileRef]);

  useEffect(() => {
    console.log(uploadedFiles);
  }, [uploadedFiles]);

  useEffect(() => {
    if (error) {
      showToast({ message: error, type: 'error' });
    }
  }, [error]);
  return (
    <div>
      <div className="flex h-11 items-center justify-between border-b border-b-black/20 px-4 font-semibold dark:border-white/20">
        <X size={24} />
        <span>Bài Viết Mới</span>
        <button
          className="text-cblue-200 disabled:text-cblue-200/50"
          disabled={uploadedFiles.length === 0}
        >
          Tiếp
        </button>
      </div>
      <div className="w-full">
        {uploadedFiles.length > 0 && <img src={uploadedFiles[0]?.url} alt="example" />}
        {uploadedFiles.length === 0 && loading ? (
          <div className="skeleton h-[60vh] w-full"></div>
        ) : (
          <span className="mt-10 block h-full text-center text-xl font-semibold text-gray-500">
            Vui lòng chọn hình ảnh để tiếp tục!
          </span>
        )}
      </div>
      <div className="absolute right-3 bottom-3">
        {uploadMultiple && (
          <div className="absolute right-0 bottom-[calc(100%+12px)] w-[max-content] max-w-[94vw] rounded-xl bg-gray-700 p-4">
            <div className="hide-scrollbar flex gap-2 overflow-x-auto">
              {uploadedFiles.length > 0 &&
                uploadedFiles.map((item) => (
                  <div key={item.asset_id} className="relative">
                    <X
                      className="absolute top-1 right-1"
                      onClick={() => handleDeleteFileItem(item.asset_id)}
                    />
                    <img
                      className="h-21 w-21 object-cover"
                      src={item.url}
                      alt={item.original_filename}
                    />
                  </div>
                ))}
              {loading && (
                <div className="flex w-21 items-center justify-center rounded-xl border-2 border-dashed border-gray-500">
                  <span className="loading loading-spinner loading-xl"></span>
                </div>
              )}

              <label
                onClick={() => inputFileRef.current?.click()}
                className="flex cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-gray-500"
              >
                <Plus width={84} height={84} className="text-3xl" strokeWidth={1} />
              </label>
            </div>
          </div>
        )}
        <button
          className={`rounded-lg p-2 ${uploadMultiple ? 'bg-white dark:text-black' : 'bg-gray-700'}`}
          onClick={() => setUploadMultiple(!uploadMultiple)}
        >
          <CopyStrokeIcon width={20} height={20} />
        </button>
      </div>

      {/* upload */}
      <input
        ref={inputFileRef}
        type="file"
        accept="image/*,video/*"
        className="hidden"
        onChange={uploadMultiple ? handleMultipleUpload : handleSingleUpload}
        multiple={uploadMultiple}
      />
    </div>
  );
}

export default CreatePost;
