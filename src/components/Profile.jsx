import React from "react";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="h-screen w-screen bg-[#FAFAFA] flex items-center justify-center">
      <div className="w-[368px] h-[796px] bg-white border border-[#E6E6E6] flex flex-col">
        <div className="px-[20px] py-[14px] border-b border-[#E6E6E6]">
          <h2 className="text-[14px] font-medium text-[#1C1C1C] leading-[20px]">
            Account Settings
          </h2>
        </div>

       <div className="bg-[#F2F2F2] border-b border-dashed border-[#b9b8b8]/80 px-4 py-4">
         <div className="flex items-start px-[20px] py-[16px] gap-[16px]">
          <div className="relative w-[72px] h-[72px]">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="rounded-full w-full h-full object-cover"
              alt="Profile"
            />
            <div className="absolute bottom-0 right-0 w-[20px] h-[20px] bg-[#6C25FF] text-white rounded-full border-2 border-white flex items-center justify-center">
              <FaCamera  size={10} />
            </div>
          </div>

          <div className="flex-1">
            <p className="text-[14px] font-semibold text-[#1C1C1C] leading-[20px]">
              Marry Doe
            </p>
            <p className="text-[13px] text-[#4F4F4F] leading-[18px] -mt-[2px]">
              Marry@Gmail.Com
            </p>
          </div>
        </div>
        <div>
            <p className="text-[13px] text-[#4F4F4F] mt-[12px] leading-[18px]">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>
       </div>
        <div className="flex-1 border-b border-dashed border-[#D9D9D9] bg-white"></div>
      </div>
    </div>
  );
};

export default Profile;
