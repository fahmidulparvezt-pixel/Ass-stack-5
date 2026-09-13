export default function StackSidebar({ stack, onRemove, onRemoveAll }) {
  const isEmpty = stack.length === 0;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 sticky top-24">
      <h3 className="font-bold text-slate-900">Your Stack</h3>
      <p className="text-sm text-slate-400 mb-4">
        {isEmpty ? "No technologies selected yet." : `${stack.length} Technology Selected`}
      </p>

      {isEmpty ? (
        <div className="border border-dashed border-slate-200 rounded-lg py-10 flex items-center justify-center text-center">
          <p className="text-sm text-slate-400 px-4">Your stack is empty.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2"
            >
              <div className="flex items-center gap-2 min-w-0">
                <img src={tech.icon} alt={tech.name} className="w-6 h-6 shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">{tech.name}</p>
                  <p className="text-xs text-slate-400">{tech.category}</p>
                </div>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                className="text-slate-400 hover:text-slate-600 shrink-0 ml-2"
                aria-label={`Remove ${tech.name}`}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {!isEmpty && (
        <button
          onClick={onRemoveAll}
          className="w-full mt-4 py-2.5 rounded-lg text-sm font-semibold text-rose-500 border border-rose-200 hover:bg-rose-50 transition-colors"
        >
          Remove All
        </button>
      )}
    </div>
  );
}
