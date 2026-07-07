import LoginForm from "../../components/auth/LoginForm";

const Login = () => {
  return (
    <main className="min-h-screen bg-[#030712] relative overflow-hidden">

      {/* Background Energy Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 blur-[160px]" />

      </div>

      {/* Login Form */}
      <LoginForm />

    </main>
  );
};

export default Login;