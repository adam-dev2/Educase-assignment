import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [isAgency, setIsAgency] = useState('yes');
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-[#F7F8F9] flex items-center justify-center">
      <div className="bg-[#F7F8F9] h-[796px] w-[368px] shadow-sm border border-gray-200 flex flex-col px-6 py-8 justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
            Create your <br /> PopX account
          </h2>

          <form className="flex flex-col gap-6">
            <div className="relative">
              <label className="absolute left-3 -top-2 text-sm bg-[#F7F8F9] px-1 text-[#6C25FF]">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Marry Doe"
                className="w-full border border-[#D9D9D9] rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:border-[#6C25FF]"
              />
            </div>

            <div className="relative">
              <label className="absolute left-3 -top-2 text-sm bg-[#F7F8F9] px-1 text-[#6C25FF]">
                Phone number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full border border-[#D9D9D9] rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:border-[#6C25FF]"
              />
            </div>

            <div className="relative">
              <label className="absolute left-3 -top-2 text-sm bg-[#F7F8F9] px-1 text-[#6C25FF]">
                Email address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full border border-[#D9D9D9] rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:border-[#6C25FF]"
              />
            </div>

            <div className="relative">
              <label className="absolute left-3 -top-2 text-sm bg-[#F7F8F9] px-1 text-[#6C25FF]">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full border border-[#D9D9D9] rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:border-[#6C25FF]"
              />
            </div>

            <div className="relative">
              <label className="absolute left-3 -top-2 text-sm bg-[#F7F8F9] px-1 text-[#6C25FF]">
                Company name
              </label>
              <input
                type="text"
                placeholder="Enter company name"
                className="w-full border border-[#D9D9D9] rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:border-[#6C25FF]"
              />
            </div>

            <div className="mt-2">
              <p className="text-sm text-gray-500 font-medium mb-1">
                Are you an Agency? <span className="text-red-500">*</span>
              </p>
              <div className="flex gap-4 items-center">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="agency"
                    value="yes"
                    checked={isAgency === 'yes'}
                    onChange={() => setIsAgency('yes')}
                    className="accent-[#6C25FF]"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="agency"
                    value="no"
                    checked={isAgency === 'no'}
                    onChange={() => setIsAgency('no')}
                    className="accent-[#6C25FF]"
                  />
                  No
                </label>
              </div>
            </div>
          </form>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-[#6C25FF] text-white font-semibold py-3 rounded-md cursor-pointer"
          onClick={() => navigate('/profile')}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Signup;
