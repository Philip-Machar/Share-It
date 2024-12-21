const CreateAccountPage = () => {
  return (
    <div className="w-screen h-screen bg-[#FAFAFA] flex justify-center items-center">
      <div className="bg-white">
        <div>
            <img src="/images/logo.png" alt="logo" />
            <h1>Share It</h1>
        </div>
        <div>
            <div>
                <h2>Create account</h2>
                <p>let's get you started sharing your links!</p>
            </div>
            <form>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input 
                        id="email"
                        type="email"
                        name="email"
                    />
                </div>
                <div>
                    <label htmlFor="password">Create password</label>
                    <input 
                        id="password"
                        type="password"
                        name="password"
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
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

