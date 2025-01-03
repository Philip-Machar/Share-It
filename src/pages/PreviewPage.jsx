import { Link } from "react-router-dom";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaArrowRight, FaYoutube, FaLinkedin } from "react-icons/fa";

const PreviewPage = () => {
  return (
    <div>

      <div className="flex justify-center items-center gap-4 p-6 mb-12">
        <Link to="/profile"><button className="border border-[#633CFF] text-[#633CFF] flex justify-center items-center w-[160px] h-[46px] rounded-lg">Back to Editor</button></Link>
        <button className="bg-[#633CFF] text-white w-[160px] h-[46px] rounded-lg">Share Link</button>
      </div>

      <div className="flex flex-col justify-center items-center mb-12">
        <img src="/images/example.jpeg" alt="profile picture" className="w-[104px] h-[104px] rounded-full border-2 border-[#633CFF] object-cover mb-5" />
        <div className="text-2xl font-bold text-[#333333] mb-2">Ben Wright</div>
        <div className="text-[#737373] text-xs">ben@example.com</div>
      </div>

      <div className="flex flex-col items-center justify-center gap-5">

        <div className="flex justify-between items-center text-white bg-[#1A1A1A] w-[237px] h-[56px] rounded-lg px-6 cursor-pointer">
          <div className="flex items-center gap-2">
            <TbBrandGithubFilled className="text-xl" /> 
            GitHub
          </div> 
          <FaArrowRight className="text-sm" />
        </div>

        <div className="flex justify-between items-center text-white bg-[#EE3939] w-[237px] h-[56px] rounded-lg px-6 cursor-pointer">
          <div className="flex items-center gap-2">
            <FaYoutube className="text-xl" /> 
            YouTube
          </div> 
          <FaArrowRight className="text-sm" />
        </div>

        <div className="flex justify-between items-center text-white bg-[#2D68FF] w-[237px] h-[56px] rounded-lg px-6 cursor-pointer">
          <div className="flex items-center gap-2">
            <FaLinkedin className="text-xl" /> 
            LinkedIn
          </div> 
          <FaArrowRight className="text-sm" />
        </div>

      </div>

    </div>
  )
}

export default PreviewPage;
