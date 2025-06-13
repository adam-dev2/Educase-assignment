import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <>
        <div className="h-screen w-screen bg-[#F7F8F9] flex items-center justify-center">
            <div className="bg-[#F7F8F9] h-[796px] w-[368px] shadow-sm border border-gray-200 flex flex-col justify-end px-6 py-8">
                <div className="mb-auto"></div>
                <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to PopX</h1>
                <p className="text-sm text-gray-500 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="w-full bg-[#6C25FF] text-white font-medium py-3 rounded-md mb-3 cursor-pointer" onClick={()=>{navigate('/signup')}}>
                    Create Account
                </button>
                <button className="w-full bg-[#EDE5FF] text-[#6C25FF] font-semibold py-3 rounded-md cursor-pointer" onClick={()=>{navigate('/login')}}>
                    Already Registered? Login
                </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home