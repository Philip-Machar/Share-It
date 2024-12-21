const CreateAccountPage = () => {
  return (
    <div className="w-screen h-screen bg-white md:bg-[#FAFAFA] md:flex md:justify-center md:items-center p-8">
      <div>
        <div className="flex items-center gap-2 mb-14">
            <img src="/images/logo.png" alt="logo" />
            <h1 className="text-[#333333] font-bold text-2xl tracking-wide">Share It</h1>
        </div>
        <div className="md:bg-white">
            <div>
                <h2>Create account</h2>
                <p>let's get you started sharing your links!</p>
            </div>
            <form className="">
                <div className="flex flex-col">
                    <label htmlFor="email">Email address</label>
                    <input 
                        id="email"
                        type="email"
                        name="email"
                        className="border border-black"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Create password</label>
                    <input 
                        id="password"
                        type="password"
                        name="password"
                        className="border border-black"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        className="border border-black"
                    />
                </div>
                <p>Password must contain at least 8 characters</p>
                <button>Create new account</button>
            </form>
            <p>Already have an account? <a href="#">Login</a></p>
        </div>
      </div>
    </div>
  )
}

export default CreateAccountPage

