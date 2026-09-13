export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
          Build Your Ideal{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="mt-5 text-slate-500 text-base md:text-lg leading-relaxed max-w-md">
          you can explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your needs in your project.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:opacity-90 transition-opacity">
            Explore Technologies
          </button>
          <button className="px-6 py-3 rounded-lg font-semibold text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <img
          src="/src/assets/banner-stack.png"
          alt="Isometric illustration of a development stack"
          className="w-64 md:w-80 select-none"
          draggable="false"
        />
      </div>
    </section>
  );
}
