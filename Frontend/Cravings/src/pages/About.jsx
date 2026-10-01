import { Link } from "react-router-dom";
import aboutPage from "../assets/aboutPage.png";

const values = [
  { icon: "♥", title: "Passion for food", description: "Great food brings people together. Every order is handled with care." },
  { icon: "✿", title: "Fresh & local", description: "We partner with neighborhood restaurants to bring you local favorites." },
  { icon: "✓", title: "Safe & reliable", description: "We make every delivery dependable, from checkout through arrival." },
];
const team = [
  { initials: "SR", name: "Sofia Reyes", role: "CEO & Co-Founder" },
  { initials: "ML", name: "Marcus Lim", role: "Co-Founder" },
  { initials: "AP", name: "Aisha Patel", role: "Head of Operations" },
  { initials: "JO", name: "James Owusu", role: "Head of Design" },
];

function About() {
  return (
    <main className="bg-white text-zinc-900">
      <section className="relative isolate flex min-h-[26rem] items-center justify-center overflow-hidden px-4 py-20 text-center">
        <img src={aboutPage} alt="A meal shared around a table" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/55 to-orange-950/50" />
        <div className="max-w-3xl text-white">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-200">Our story</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-6xl">About Cravings</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">Connecting hungry hearts with amazing food, one delivery at a time.</p>
        </div>
      </section>

      <section className="bg-orange-800 px-4 py-7 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 text-center md:grid-cols-4">
          {[{ value: "50K+", label: "Happy customers" }, { value: "1,200+", label: "Partner restaurants" }, { value: "3,500+", label: "Active riders" }, { value: "4.8 ★", label: "Average rating" }].map((stat) => (
            <div key={stat.label}><p className="text-3xl font-extrabold">{stat.value}</p><p className="mt-1 text-sm text-orange-100">{stat.label}</p></div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-700">Our story</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Born from a love of great food</h2>
            <p className="mt-5 leading-7 text-zinc-600">Cravings started in 2022 when three food lovers realized that finding and ordering from local restaurants should be easier. We set out to build a platform that puts restaurants, riders, and customers first.</p>
            <p className="mt-4 leading-7 text-zinc-600">Today, we help neighborhood businesses reach new customers and connect riders with flexible work, while bringing delicious meals straight to your door.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[{ icon: "♨", title: "Restaurants", description: "A wide range of cuisines from local gems." }, { icon: "➜", title: "Riders", description: "Fast, reliable delivery partners." }, { icon: "⌂", title: "Partners", description: "Local businesses growing with us." }, { icon: "♥", title: "Community", description: "People at the heart of every order." }].map((item) => (
              <article key={item.title} className="rounded-2xl border border-orange-100 bg-orange-50/70 p-5">
                <span className="text-2xl text-orange-700" aria-hidden="true">{item.icon}</span>
                <h3 className="mt-3 font-bold">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-zinc-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-700">What we stand for</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Our core values</h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl border border-zinc-100 bg-white p-7 text-center shadow-sm">
                <span className="mx-auto grid size-12 place-items-center rounded-full bg-orange-100 text-xl font-bold text-orange-700">{value.icon}</span>
                <h3 className="mt-4 text-lg font-bold">{value.title}</h3>
                <p className="mt-2 leading-6 text-zinc-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-700">The people behind Cravings</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Meet the team</h2>
          </div>
          <div className="mt-9 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {team.map((person) => (
              <article key={person.initials} className="rounded-2xl border border-zinc-100 p-5 text-center">
                <div className="mx-auto grid size-20 place-items-center rounded-full bg-gradient-to-br from-orange-500 to-orange-800 text-xl font-extrabold text-white shadow-lg">{person.initials}</div>
                <h3 className="mt-4 font-bold">{person.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">{person.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-orange-100 bg-white px-4 py-14 text-center text-zinc-900">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to satisfy your cravings?</h2>
        <p className="mx-auto mt-3 max-w-xl text-zinc-600">Join thousands of happy customers ordering their favorite meals every day.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link to="/register" className="rounded-xl bg-orange-700 px-6 py-3 font-bold text-white transition hover:bg-orange-800">Get started</Link>
          <Link to="/contact-us" className="rounded-xl border border-orange-200 px-6 py-3 font-bold text-orange-800 transition hover:bg-orange-50">Contact us</Link>
        </div>
      </section>
    </main>
  );
}

export default About;
