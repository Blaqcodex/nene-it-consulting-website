const LoginForm = () => {
  return (
    
    <div className="min-h-screen flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-10">

      

        <p className="text-cyan-400 uppercase tracking-[0.35em] text-xs">
          Mission Control
        </p>

        <h1 className="text-4xl font-bold text-white mt-4">
          Authorization Required
        </h1>

        <p className="text-gray-400 mt-3">
          Authenticate to access the Nene IT & Consulting command centre.
        </p>

        <form className="mt-10 space-y-5">

          <div>
            <label className="block text-gray-300 mb-2">
              Identity
            </label>

            <input
              type="email"
              placeholder="admin@neneit.co.za"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Access Key
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <button
            className="w-full rounded-xl bg-cyan-500 hover:bg-cyan-400 transition py-3 font-semibold text-black mt-4"
          >
            INITIALIZE
          </button>

        </form>

      </div>

    </div>
  );
};

export default LoginForm;