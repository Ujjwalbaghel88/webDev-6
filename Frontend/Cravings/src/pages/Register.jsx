import { Link, useNavigate } from "react-router-dom";
import foodtable from "../assets/foodTable.png";

function Register() {
  const navigate = useNavigate();
  const inputClass = "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100";

  return (
    <main className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 py-10">
      <img src={foodtable} alt="A table filled with food" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/45 to-orange-950/55" />
      <form onSubmit={(event) => { event.preventDefault(); navigate("/home"); }} className="relative z-10 w-full max-w-xl rounded-3xl border border-white/50 bg-white/95 p-6 shadow-2xl backdrop-blur sm:p-9">
        <p className="mb-2 text-center text-sm font-bold uppercase tracking-[0.2em] text-orange-700">Join Cravings</p>
        <h1 className="text-center text-3xl font-extrabold text-zinc-900">Create your account</h1>
        <p className="mt-2 text-center text-sm text-zinc-500">Choose how you want to be part of Cravings.</p>

        <fieldset className="mt-6">
          <legend className="mb-3 text-sm font-semibold text-zinc-700">Register as</legend>
          <div className="grid grid-cols-3 gap-2">
            {["Customer", "Restaurant", "Rider"].map((role, index) => (
              <label key={role} className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-2 py-3 text-xs font-semibold text-zinc-700 transition hover:border-orange-400 sm:text-sm">
                <input type="radio" name="role" value={role.toLowerCase()} defaultChecked={index === 0} className="accent-orange-700" />{role}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <input type="text" required autoComplete="name" className={inputClass} placeholder="Full name" aria-label="Full name" />
          <input type="email" required autoComplete="email" className={inputClass} placeholder="Email address" aria-label="Email address" />
          <input type="tel" required autoComplete="tel" className={inputClass} placeholder="Phone number" aria-label="Phone number" />
          <input type="password" required autoComplete="new-password" className={inputClass} placeholder="Password" aria-label="Password" />
          <input type="password" required autoComplete="new-password" className={`${inputClass} sm:col-span-2`} placeholder="Confirm password" aria-label="Confirm password" />
        </div>

        <label className="mt-5 flex items-start gap-2 text-sm text-zinc-600">
          <input type="checkbox" required className="mt-1 size-4 accent-orange-700" />
          <span>I agree to the <a href="#terms" className="font-semibold text-orange-700 hover:underline">terms and conditions</a>.</span>
        </label>
        <button type="submit" className="mt-6 w-full rounded-xl bg-orange-700 px-4 py-3 font-bold text-white shadow-lg shadow-orange-700/20 transition hover:bg-orange-800">Create account</button>
        <p className="mt-5 text-center text-sm text-zinc-600">Already registered? <Link to="/login" className="font-bold text-orange-700 hover:underline">Login</Link></p>
      </form>
    </main>
  );
}

export default Register;
