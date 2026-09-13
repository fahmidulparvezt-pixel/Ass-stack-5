const BADGE_COLORS = {
  Popular: "bg-emerald-50 text-emerald-600",
  Versatile: "bg-emerald-50 text-emerald-600",
  Fast: "bg-orange-50 text-orange-600",
  Standard: "bg-emerald-50 text-emerald-600",
  "Top SQL": "bg-sky-50 text-sky-600",
  Cache: "bg-rose-50 text-rose-600",
  Ubiquitous: "bg-amber-50 text-amber-600",
  Essential: "bg-sky-50 text-sky-600",
  Robust: "bg-slate-100 text-slate-600",
  Modern: "bg-sky-50 text-sky-600",
  Containers: "bg-sky-50 text-sky-600",
};

export default function TechCard({ tech, isAdded, onAdd }) {
  const badgeClass = BADGE_COLORS[tech.badge] || "bg-slate-100 text-slate-600";

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badgeClass}`}>
          {tech.badge}
        </span>
      </div>

      <h3 className="font-bold text-slate-900 mb-1">{tech.name}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
        {tech.description}
      </p>

      <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
        <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
          {tech.category}
        </span>
        <span>{tech.difficulty}</span>
        <span className="flex items-center gap-1 ml-auto text-amber-500 font-medium">
          ★ {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-colors ${
          isAdded
            ? "bg-slate-100 text-slate-400 cursor-not-allowed"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
