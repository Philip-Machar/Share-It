import { IoMdMail, IoIosLock } from "react-icons/io";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="w-screen h-screen bg-white md:bg-[#FAFAFA] md:flex md:justify-center md:items-center p-8">
      <div>
        <div className="flex items-center gap-2 mb-12">
            <img src="/images/logo-devlinks-small.svg" alt="logo" />
            <h1 className="text-[#333333] font-bold text-2xl">Share It.</h1>
        </div>
        <div className="md:bg-white">
            <div className="mb-7">
                <h2 className="text-2xl text-[#333333] font-semibold mb-2">Login</h2>
                <p className="text-[#737373]">Add your details below to get back into the app.</p>
            </div>
            <form className="text-[#737373] flex flex-col gap-6 mb-6">
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-[#333333] text-sm mb-1">Email address</label>
                    <div className="relative">
                        <IoMdMail className="ml-3 absolute top-1/2 transform -translate-y-1/2" />
                        <input 
                            id="email"
                            type="email"
                            name="email"
                            placeholder="e.g. john@email.com"
                            className="text-[#333333] border border-[#D9D9D9] outline-none py-3 px-9 rounded-lg placeholder-[#737373] w-full"
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password" className="text-[#333333] text-sm mb-1">Create password</label>
                    <div className="relative">
                        <IoIosLock className="ml-3 absolute top-1/2 transform -translate-y-1/2" />
                        <input 
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="text-[#333333] border border-[#D9D9D9] outline-none py-3 px-9 rounded-lg placeholder-[#737373] w-full"
                        />
                    </div>
                </div>
                <button type="submit" className="text-white bg-[#633CFF] p-3 rounded-lg">Login</button>
            </form>
            <div className="text-[#737373] flex flex-col items-center">Don't have an account? <Link to="/create-account"><p className="text-[#633CFF]">Create account</p></Link></div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
