import React from "react";

const SignUp = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      data-theme="forest"
    >
      <div className="flex w-full max-w-6xl rounded-2xl overflow-hidden shadow-lg">
        {/* Left Side - Form */}
        <div className="flex-1 bg-black p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 text-green-800 mb-6">
            <img
              className="w-10 rounded-xl object-cover"
              src="https://static.vecteezy.com/system/resources/previews/002/159/401/non_2x/language-translation-icon-free-vector.jpg"
              alt=""
            />
            <h1 className="text-xl font-bold">Langify</h1>
          </div>

          <div className="text-white mb-6">
            <h1 className="text-lg font-semibold">Create an Account</h1>
            <p className="text-sm">
              Join LangConnect and start your language learning journey
            </p>
          </div>

          <div className="text-white flex flex-col gap-4 mb-6">
            <div className="flex flex-col">
              <label className="text-sm font-light">Full Name</label>
              <input type="text" className="input rounded-xl" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-light">Email</label>
              <input type="email" className="input rounded-xl" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-light">Password</label>
              <input type="password" className="input rounded-xl" />
            </div>
          </div>

          <button className="btn btn-outline btn-success">Success</button>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 bg-green-800 flex items-center justify-center">
          <img
            src="/i.png"
            alt="Language connection illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
