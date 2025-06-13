import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [isAgency, setIsAgency] = useState('yes');
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-[#F7F8F9] flex items-center justify-center">
      <div className="bg-[#F7F8F9] h-[796px] w-[368px] shadow-sm border border-gray-200 flex flex-col px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
          Create your <br /> PopX account
        </h2>

        <form className="flex flex-col gap-4 flex-grow">
          <div>
            <label className="text-sm text-[#6C25FF] font-medium block mb-1">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-[#6C25FF]"
            />
          </div>

          <div>
            <label className="text-sm text-[#6C25FF] font-medium block mb-1">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-[#6C25FF]"
            />
          </div>

          <div>
            <label className="text-sm text-[#6C25FF] font-medium block mb-1">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-[#6C25FF]"
            />
          </div>

          <div>
            <label className="text-sm text-[#6C25FF] font-medium block mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-[#6C25FF]"
            />
          </div>

          <div>
            <label className="text-sm text-[#6C25FF] font-medium block mb-1">
              Company name
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-[#6C25FF]"
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

        <button
          type="submit"
          className="w-full mt-6 bg-[#6C25FF] text-white font-semibold py-3 rounded-md cursor-pointer" onClick={() => {navigate('/profile')}}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Signup;
