import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  return (
    <div className="h-screen w-screen bg-[#F7F8F9] flex items-center justify-center">
      <div className="bg-[#F7F8F9] h-[796px] w-[368px] shadow-sm border border-gray-200 px-6 py-8 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
            Signin to your <br /> PopX account
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
          </p>

          <form className="flex flex-col gap-6">
            <div className="relative">
              <label
                htmlFor="email"
                className="absolute left-3 -top-2 text-sm bg-[#F7F8F9] px-1 text-[#6C25FF]"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full border border-[#D9D9D9] rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:border-[#6C25FF]"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="absolute left-3 -top-2 text-sm bg-[#F7F8F9] px-1 text-[#6C25FF]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full border border-[#D9D9D9] rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:border-[#6C25FF]"
              />
            </div>
          </form>
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full py-3 mt-6 rounded-md font-semibold transition-all duration-200 ${
            isFormValid
              ? 'bg-[#6C25FF] text-white cursor-pointer'
              : 'bg-[#CBCBCB] text-white cursor-not-allowed'
          }`}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
