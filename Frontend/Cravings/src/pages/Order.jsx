import { useMemo, useState } from "react";
import rajhans from "../assets/rajhans.jpg";
import background from "../assets/BACKGROUND1.webp";
import greenhouse from "../assets/GreenHose.jpg";
import restaurant2 from "../assets/restaurant2.webp";
import restaurant3 from "../assets/restaurant3.avif";
import windnWave from "../assets/windsRes.jpg";

const restaurants = [
  { name: "Under The Mango Tree", image: restaurant3, rating: "3.6", description: "Enjoy the thrill of grill and barbecue at Under The Mango Tree restaurant at Jehan Numa Palace, Bhopal.", cuisines: ["Indian", "Chinese", "Italian"] },
  { name: "Raj Darbar", image: background, rating: "4.8", description: "A one-of-a-kind Indian restaurant with a warm dhaba-style dining experience for family and friends.", cuisines: ["Indian", "Chinese", "Italian"] },
  { name: "Countryside Culture", image: restaurant2, rating: "4.1", description: "A countryside escape with relaxed dining, warm hospitality and delicious local favorites.", cuisines: ["Indian", "Chinese"] },
  { name: "Raj Hans", image: rajhans, rating: "4.2", description: "A Bhopal favorite serving generous vegetarian meals and comforting North Indian classics.", cuisines: ["Indian", "Chinese", "Italian"] },
  { name: "Green House Bistro", image: greenhouse, rating: "3.9", description: "A popular vegetarian spot for North Indian thalis and family-friendly dining.", cuisines: ["Indian", "Chinese", "Italian"] },
  { name: "Winds n Waves", image: windnWave, rating: "4.5", description: "A much-loved Bhopal restaurant with scenic views and a broad menu of local favorites.", cuisines: ["Indian", "Chinese", "Italian"] },
];

function Order() {
  const [search, setSearch] = useState("");
  const visibleRestaurants = useMemo(
    () => restaurants.filter(({ name, cuisines }) => `${name} ${cuisines.join(" ")}`.toLowerCase().includes(search.toLowerCase())),
    [search],
  );

  return (
    <main className="min-h-screen bg-orange-50/70">
      <section className="bg-gradient-to-br from-orange-800 via-orange-700 to-amber-600 px-4 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-100">Find something delicious</p>
          <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">Order your favorites</h1>
          <p className="mt-3 max-w-xl text-orange-50">Explore neighborhood restaurants and get a great meal delivered.</p>
          <label className="mt-7 flex max-w-2xl items-center gap-3 rounded-2xl bg-white px-4 py-3.5 text-zinc-400 shadow-xl">
            <span aria-hidden="true">Search</span>
            <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} className="w-full bg-transparent text-zinc-900 outline-none placeholder:text-zinc-400" placeholder="Search restaurants or cuisines..." aria-label="Search restaurants or cuisines" />
          </label>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-3xl font-extrabold text-zinc-900">All restaurants</h2>
            <p className="mt-1 text-zinc-600">{visibleRestaurants.length} restaurants available</p>
          </div>
        </div>

        {visibleRestaurants.length ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleRestaurants.map((restaurant) => (
              <article key={restaurant.name} className="group overflow-hidden rounded-2xl bg-white shadow-md shadow-orange-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <img src={restaurant.image} alt={restaurant.name} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-bold text-zinc-800 shadow"><span aria-hidden="true" className="text-amber-500">★</span>{restaurant.rating}</span>
                </div>
                <div className="flex min-h-56 flex-col p-5">
                  <h3 className="text-lg font-extrabold text-zinc-900">{restaurant.name}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-600">{restaurant.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">{restaurant.cuisines.map((cuisine) => <span key={cuisine} className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-800">{cuisine}</span>)}</div>
                  <button type="button" className="mt-auto rounded-xl bg-orange-50 py-2.5 text-sm font-bold text-orange-800 transition hover:bg-orange-100">Explore menu</button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-orange-100 bg-white p-8 text-center text-zinc-600">No restaurants match “{search}”. Try another search.</p>
        )}
      </section>
    </main>
  );
}

export default Order;
