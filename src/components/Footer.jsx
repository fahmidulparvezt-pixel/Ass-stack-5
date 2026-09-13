const LINK_GROUPS = [
  { title: "Product", links: ["Home", "Technologies", "Projects"] },
  { title: "Company", links: ["About", "Contact", "Careers"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
              DS
            </div>
            <span className="font-bold text-slate-900">
              Dev<span className="text-pink-500">Stack</span>
            </span>
          </div>
          <p className="text-sm text-slate-500 mb-4 max-w-xs">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="https://github.com/fahmidulparvezt-pixel" className="hover:text-slate-800">GitHub</a>
            <a href="#" className="hover:text-slate-800">Twitter</a>
            <a href="#" className="hover:text-slate-800">LinkedIn</a>
          </div>
        </div>

        {LINK_GROUPS.map((group) => (
          <div key={group.title}>
            <h4 className="text-xs font-bold tracking-wide text-slate-900 mb-3">
              {group.title.toUpperCase()}
            </h4>
            <ul className="flex flex-col gap-2">
              {group.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-500 hover:text-slate-800">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-600">Privacy</a>
            <a href="#" className="hover:text-slate-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
