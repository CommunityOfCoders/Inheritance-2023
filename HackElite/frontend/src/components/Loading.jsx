import React from "react";
import { RingLoader } from "react-spinners";

const Loading = ({ isLoading }) => {
  return (
    <>
    
      {isLoading && (
        <div className="fixed z-50 inset-0 flex items-center justify-center overflow-y-auto">
          {/* Overlay */}
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>

          {/* Spinner and Text */}
          <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xs sm:w-full">
            <div className="flex flex-col items-center p-6 space-y-4">
              <RingLoader color="#2462b9" size={50} />
              <p className="text-lg text-gray-900">
                Your summary is being generated
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
