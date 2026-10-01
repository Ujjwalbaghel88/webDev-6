import { Link, useNavigate } from "react-router-dom";
import foodtable from "../assets/foodtable.png";

function Login() {
  const navigate = useNavigate();

  return (
    <main className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 py-12">
      <img src={foodtable} alt="A table filled with food" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/45 to-orange-950/55" />
      <form onSubmit={(event) => { event.preventDefault(); navigate("/home"); }} className="relative z-10 w-full max-w-md rounded-3xl border border-white/50 bg-white/95 p-7 shadow-2xl backdrop-blur sm:p-9">
        <p className="mb-2 text-center text-sm font-bold uppercase tracking-[0.2em] text-orange-700">Welcome back</p>
        <h1 className="text-center text-3xl font-extrabold text-zinc-900">Login to Cravings</h1>
        <p className="mt-2 text-center text-sm text-zinc-500">Good food is just a few clicks away.</p>

        <label className="mt-7 block text-sm font-semibold text-zinc-700" htmlFor="login-email">Email</label>
        <input id="login-email" type="email" required autoComplete="email" placeholder="you@example.com" className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100" />

        <label className="mt-5 block text-sm font-semibold text-zinc-700" htmlFor="login-password">Password</label>
        <input id="login-password" type="password" required autoComplete="current-password" placeholder="Enter your password" className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100" />

        <div className="mt-4 flex items-center justify-between gap-3 text-sm">
          <label className="flex items-center gap-2 text-zinc-600"><input id="remember" type="checkbox" className="size-4 accent-orange-700" />Remember me</label>
          <button type="button" className="font-semibold text-orange-700 hover:text-orange-900">Forgot password?</button>
        </div>

        <button type="submit" className="mt-7 w-full rounded-xl bg-orange-700 px-4 py-3 font-bold text-white shadow-lg shadow-orange-700/20 transition hover:bg-orange-800">Login</button>
        <p className="mt-6 text-center text-sm text-zinc-600">Don&apos;t have an account? <Link to="/register" className="font-bold text-orange-700 hover:underline">Create one</Link></p>
      </form>
    </main>
  );
}

export default Login;
