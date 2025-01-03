const ProfilePage = () => {
  return (
    <div className="bg-white text-[#737373] m-5 p-6 rounded-lg">

      <div className="mb-10">
        <h1 className="text-2xl text-[#333333] font-bold my-2">Profile Details</h1>
        <p>Add your details to create a personal touch to your profile.</p>
      </div>

      <div className="bg-[#FAFAFA] p-6 mb-6 rounded-lg">
        <div>
          <div className="mb-4">Profile picture</div>
          <div className="flex flex-col items-center justify-center bg-[#EFEBFF] px-6 py-12 mb-4 rounded-lg w-44">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40" className="mb-2"><path fill="#633CFF" d="M33.75 6.25H6.25a2.5 2.5 0 0 0-2.5 2.5v22.5a2.5 2.5 0 0 0 2.5 2.5h27.5a2.5 2.5 0 0 0 2.5-2.5V8.75a2.5 2.5 0 0 0-2.5-2.5Zm0 2.5v16.055l-4.073-4.072a2.5 2.5 0 0 0-3.536 0l-3.125 3.125-6.875-6.875a2.5 2.5 0 0 0-3.535 0L6.25 23.339V8.75h27.5ZM6.25 26.875l8.125-8.125 12.5 12.5H6.25v-4.375Zm27.5 4.375h-3.34l-5.624-5.625L27.91 22.5l5.839 5.84v2.91ZM22.5 15.625a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Z"/></svg>
            <div className="text-[#633CFF]">+ Upload Image</div>
          </div>
          <div className="text-xs">Image must be below 1024x1024px. Use PNG or JPG format.</div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] p-6 mb-6 rounded-lg">
        <form className="flex flex-col gap-2">
            <div>
              <label htmlFor="first_name" className="text-[#333333] text-xs">First Name*</label>
              <input 
                id="first_name"
                type="text" 
                name="first_name"
                className="text-[#333333] border border-[#D9D9D9] outline-none py-3 pl-4 rounded-lg w-full mt-1"
              />
            </div>
            <div>
              <label htmlFor="last_name" className="text-[#333333] text-xs">Last Name*</label>
              <input 
                id="last_name"
                type="text" 
                name="last_name"
                className="text-[#333333] border border-[#D9D9D9] outline-none py-3 pl-4 rounded-lg w-full mt-1"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-[#333333] text-xs">Email*</label>
              <input 
                id="email"
                type="email" 
                name="email"
                className="text-[#333333] border border-[#D9D9D9] outline-none py-3 pl-4 rounded-lg w-full mt-1"
              />
            </div>
          </form>
      </div>

      <hr className="-mx-5 my-6 border-[1px]" />

      <div className="flex justify-center items-center">
        <button className="bg-[#633CFF] text-white font-semibold w-full py-3 rounded-lg mb-4">save</button>
      </div>

    </div>
  )
}

export default ProfilePage
