import contact from "../assets/contactPage.jpg";

function ContactUs() {
  const inputClass = "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100";

  return (
    <main className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 py-12">
      <img src={contact} alt="A welcoming dining space" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/45 to-orange-950/55" />
      <form onSubmit={(event) => event.preventDefault()} className="relative z-10 w-full max-w-xl rounded-3xl border border-white/50 bg-white/95 p-7 shadow-2xl backdrop-blur sm:p-9">
        <p className="mb-2 text-center text-sm font-bold uppercase tracking-[0.2em] text-orange-700">We are here to help</p>
        <h1 className="text-center text-3xl font-extrabold text-zinc-900">Contact us</h1>
        <p className="mt-2 text-center text-sm text-zinc-500">Have a question? Send our team a message.</p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <input required type="text" autoComplete="name" className={inputClass} placeholder="Full name" aria-label="Full name" />
          <input required type="email" autoComplete="email" className={inputClass} placeholder="Email address" aria-label="Email address" />
          <input type="tel" autoComplete="tel" className={inputClass} placeholder="Phone number (optional)" aria-label="Phone number" />
          <input required type="text" className={inputClass} placeholder="Subject" aria-label="Subject" />
          <textarea required rows="5" className={`${inputClass} resize-y sm:col-span-2`} placeholder="Write your message..." aria-label="Message" />
        </div>
        <button type="submit" className="mt-5 w-full rounded-xl bg-orange-700 px-4 py-3 font-bold text-white shadow-lg shadow-orange-700/20 transition hover:bg-orange-800">Send message</button>
      </form>
    </main>
  );
}

export default ContactUs;
