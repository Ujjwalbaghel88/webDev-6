import rajhans from "../assets/rajhans.jpg";
import background from "../assets/BACKGROUND1.webp";
import greenhouse from "../assets/GreenHose.jpg";
import restaurant2 from "../assets/restaurant2.webp";
import restaurant3 from "../assets/restaurant3.avif";
import taj from "../assets/taj.jpg";
import home1 from "../assets/home1.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const heroSlides = [
  { image: home1, alt: "Fresh food served at Cravings" },
  { image: restaurant3, alt: "A restaurant meal ready to enjoy" },
  { image: greenhouse, alt: "Fresh dishes from Green House restaurant" },
  { image: taj, alt: "A meal from The Taj restaurant" },
];

function Home() {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="relative isolate min-h-[34rem] w-full overflow-hidden sm:min-h-[39rem]" role="region" aria-roledescription="carousel" aria-label="Featured food">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <img
              key={slide.alt}
              src={slide.image}
              alt={slide.alt}
              aria-hidden={activeSlide !== index}
              className={`absolute inset-0 h-full min-h-[34rem] w-full object-cover transition-opacity duration-700 sm:min-h-[39rem] ${activeSlide === index ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
        </div>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => setActiveSlide((currentSlide) => (currentSlide - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-black/35 text-3xl text-white transition hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          &#8249;
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-black/35 text-3xl text-white transition hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          &#8250;
        </button>

        <section>
          <div className="absolute inset-0 z-10 flex items-center justify-center px-4 pt-12 text-center text-white sm:pt-0">
            <div className="mx-auto mb-8 w-full max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Your Favorite Food,
                <br />
                Delivered Fast
              </h1>

              <p className="mt-3 text-lg">
                Order from thousands of restaurants and get it delivered to your
                doorstep
              </p>

              <div
                id="buttonHome"
                className="my-4 mt-5 flex flex-wrap items-center justify-center gap-3"
              >
                <button
                  className="rounded-xl bg-(--color-primary) px-6 py-3 font-bold text-white shadow-lg transition hover:bg-orange-800"
                  onClick={() => navigate("/register")}
                >
                  Sign Up
                </button>

                <button
                  className="rounded-xl bg-white px-6 py-3 font-bold text-(--color-base-content) shadow-lg transition hover:bg-orange-50"
                  onClick={() => navigate("/order")}
                >
                  Order Now
                </button>
              </div>
              <div
                className="mx-auto flex w-full max-w-xl items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl"
              >
                <span aria-hidden="true" className="text-lg text-zinc-400">Search</span>
                <input
                  id="text"
                  className="w-full border-0 bg-transparent font-medium text-zinc-800 outline-none placeholder:text-zinc-400"
                  placeholder="Search restaurants or dishes...."
                />
              </div>
            </div>
          </div>
        </section>

        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2" aria-label="Choose slide">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.alt}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeSlide === index ? "true" : undefined}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all ${activeSlide === index ? "w-8 bg-white" : "w-2.5 bg-white/60 hover:bg-white"}`}
            />
          ))}
        </div>
      </div>

      <section className="bg-linear-to-b from-orange-700 to-orange-600 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-orange-100">Made for your cravings</p>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Featured Restaurants</h2>
            <p className="mt-2 text-base text-orange-50">6 handpicked places to find your next favorite meal</p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div
              className="group overflow-hidden rounded-2xl bg-white shadow-lg shadow-orange-950/15 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={taj}
                  alt="The Taj restaurant"
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-bold text-(--color-base-content) shadow">
                  <span aria-hidden="true" className="text-amber-500">★</span>
                  5.0
                </span>
              </div>
              <div className="flex h-[230px] flex-col p-5">
                <h3 className="text-lg font-extrabold text-(--color-base-content)">The Taj</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-600">
                  A hidden gem away from the city, offering lush green meadows
                  and peaceful walking paths for relaxation.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-800">Indian</span>
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-800">Chinese</span>
                </div>
                <Link to="/order" className="mt-auto block rounded-xl bg-orange-50 py-2.5 text-center text-sm font-bold text-orange-800 transition hover:bg-orange-100">
                  Explore more
                </Link>
              </div>
            </div>
            <div
              className="group overflow-hidden rounded-2xl bg-white shadow-lg shadow-orange-950/15 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={background}
                  alt="Raj Darbar restaurant"
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-bold text-(--color-base-content) shadow">
                  <span aria-hidden="true" className="text-amber-500">★</span>
                  3.6
                </span>
              </div>
              <div className="flex h-[230px] flex-col p-5">
                <h3 className="text-lg font-extrabold text-(--color-base-content)">Raj Darbar</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-600">
                  Enjoy the thrill of grill and barbecue at Under The Mango Tree
                  restaurant at Jehan Numa Palace, Bhopal. Head here now!
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-800">Indian</span>
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-800">Chinese</span>
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-800">Italian</span>
                </div>
                <Link to="/order" className="mt-auto block rounded-xl bg-orange-50 py-2.5 text-center text-sm font-bold text-orange-800 transition hover:bg-orange-100">
                  Explore more
                </Link>
              </div>
            </div>
            <div
              className="group overflow-hidden rounded-2xl bg-white shadow-lg shadow-orange-950/15 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={restaurant2}
                  alt="CountySide Culture restaurant"
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-bold text-(--color-base-content) shadow">
                  <span aria-hidden="true" className="text-amber-500">★</span>
                  4.8
                </span>
              </div>
              <div className="flex h-[230px] flex-col p-5">
                <h3 className="text-lg font-extrabold text-(--color-base-content)">CountySide Culture</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-600">
                  Raj Darbar is a one-of-a-kind Indian restaurant that offers a
                  unique dining experience for families and friends with a
                  dhaba-style theme.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-800">Indian</span>
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-800">Chinese</span>
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-800">Italian</span>
                </div>
                <Link to="/order" className="mt-auto block rounded-xl bg-orange-50 py-2.5 text-center text-sm font-bold text-orange-800 transition hover:bg-orange-100">
                  Explore more
                </Link>
              </div>
            </div>
            <div
              className="group overflow-hidden rounded-2xl bg-white shadow-lg shadow-orange-950/15 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={restaurant3}
                  alt="Under The Mango Tree restaurant"
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-bold text-(--color-base-content) shadow">
                  <span aria-hidden="true" className="text-amber-500">★</span>
                  4.2
                </span>
              </div>
              <div className="flex h-[230px] flex-col p-5">
                <h3 className="text-lg font-extrabold text-(--color-base-content)">Under The Mango Tree</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-600">
                  mago tree is a popular Bhopal restaurant, famous for its
                  iconic Chur Chur Naan and various affordable vegetarian meals.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-800">Indian</span>
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-800">Chinese</span>
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-800">Italian</span>
                </div>
                <Link to="/order" className="mt-auto block rounded-xl bg-orange-50 py-2.5 text-center text-sm font-bold text-orange-800 transition hover:bg-orange-100">
                  Explore more
                </Link>
              </div>
            </div>

            <div
              className="group overflow-hidden rounded-2xl bg-white shadow-lg shadow-orange-950/15 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={greenhouse}
                  alt="Green House restaurant"
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-bold text-(--color-base-content) shadow">
                  <span aria-hidden="true" className="text-amber-500">★</span>
                  4.2
                </span>
              </div>
              <div className="flex h-[230px] flex-col p-5">
                <h3 className="text-lg font-extrabold text-(--color-base-content)">Green House</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-600">
                  Green House Resto is a popular Bhopal restaurant, famous for
                  its iconic roofi and qurr and various affordable meals.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-800">Indian</span>
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-800">Chinese</span>
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-800">Italian</span>
                </div>
                <Link to="/order" className="mt-auto block rounded-xl bg-orange-50 py-2.5 text-center text-sm font-bold text-orange-800 transition hover:bg-orange-100">
                  Explore more
                </Link>
              </div>
            </div>

            <div
              className="group overflow-hidden rounded-2xl bg-white shadow-lg shadow-orange-950/15 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={rajhans}
                  alt="Raj Hans restaurant"
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-bold text-(--color-base-content) shadow">
                  <span aria-hidden="true" className="text-amber-500">★</span>
                  4.2
                </span>
              </div>
              <div className="flex h-[230px] flex-col p-5">
                <h3 className="text-lg font-extrabold text-(--color-base-content)">Raj Hans</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-600">
                  Hotel Rajhans in Bhopal is primarily famous for its unlimited,
                  affordable vegetarian Punjabi and South Indian thalis
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-800">Indian</span>
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-800">Chinese</span>
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-800">Italian</span>
                </div>
                <Link to="/order" className="mt-auto block rounded-xl bg-orange-50 py-2.5 text-center text-sm font-bold text-orange-800 transition hover:bg-orange-100">
                  Explore more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="CravingNumber" className="bg-orange-50 px-4 py-16 text-center">
        <h4 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">Cravings by the Numbers</h4>
        <p className="mt-3 text-lg text-zinc-600">
          See why millions trust us for their daily food delivery needs
        </p>

        <div className="mx-auto mt-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h4 className="text-4xl font-extrabold text-orange-700">2.5M+</h4>

                <p>Successful Deliveries</p>
              </div>
            </div>

            <div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h4 className="text-4xl font-extrabold text-orange-700">500K+</h4>
                <p>Happy Customers</p>
              </div>
            </div>

            <div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h4 className="text-4xl font-extrabold text-orange-700">5K+</h4>
                <p>Partner Restaurants</p>
              </div>
            </div>

            <div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h4 className="text-4xl font-extrabold text-orange-700">1K+</h4>
                <p>Active Riders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <h2 className="text-center text-3xl font-extrabold text-zinc-900 sm:text-4xl">
          What Our Customers Say
        </h2>
        <p className="mt-3 text-center text-zinc-600">
          Real feedback from real food lovers
        </p>
        <div className="mx-auto mt-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="grid h-full gap-3 rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
                <div className="mb-2 flex gap-1 text-amber-500" aria-label="5 out of 5 stars">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <h3 className="text-lg font-bold">Amazing Service!</h3>
                <p>
                  "The food arrived hot and fresh. The delivery was incredibly
                  fast. Highly impressed with Cravings' service!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-orange-100 p-3 text-sm font-bold text-orange-800">
                    <b>AJ</b>
                  </div>
                  <div className="grid text-sm">
                    <span className="font-bold">Arjun J.</span>
                    <span className="text-zinc-500">Verified Buyer</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid h-full gap-3 rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
                <div className="mb-2 flex gap-1 text-amber-500" aria-label="5 out of 5 stars">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <h3 className="text-lg font-bold">Best App Ever!</h3>
                <p>
                  "Easy to use interface, wide variety of restaurants, and quick
                  delivery. I order from Cravings every week!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-orange-100 p-3 text-sm font-bold text-orange-800">
                    <b>SP</b>
                  </div>
                  <div className="grid text-sm">
                    <span className="font-bold">Sneha P.</span>
                    <span className="text-zinc-500">Verified Buyer</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid h-full gap-3 rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
                <div className="mb-2 flex gap-1 text-amber-500" aria-label="5 out of 5 stars">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <h3 className="text-lg font-bold">Excellent Choices</h3>
                <p>
                  "Love the variety of restaurants available. Found my new
                  favorite spot through Cravings. Definitely worth it!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-orange-100 p-3 text-sm font-bold text-orange-800">
                    <b>RK</b>
                  </div>
                  <div className="grid text-sm">
                    <span className="font-bold">Raj Kumar</span>
                    <span className="text-zinc-500">Verified Buyer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="outerdiv" className="bg-zinc-900 px-4 py-16 text-center text-white">
        <h4 className="text-3xl font-extrabold">
          <b>Become a Restaurant Partner</b>
        </h4>
        <p className="mx-auto mb-6 mt-3 max-w-2xl text-zinc-300">
          Grow your business with Cravings. Join thousands of restaurants
          already delivering with us.
        </p>

        <a
          href="/contact-us"
          className="mt-2 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-orange-800 transition hover:bg-orange-50"
        >
          Partner with Us
        </a>
      </section>
    </>
  );
}
export default Home;
