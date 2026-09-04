export type RelatedLink = { label: string; href: string; note?: string };

type Props = {
  subjects?: RelatedLink[];
  curricula?: RelatedLink[];
  breadcrumbs?: { name: string; href: string }[];
};

export default function RelatedContent({ subjects = [], curricula = [], breadcrumbs = [] }: Props) {
  if (!subjects.length && !curricula.length && !breadcrumbs.length) return null;

  return (
    <section className="py-14 lg:py-16 bg-[#f7f9fc] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-10">
          {subjects.length > 0 && (
            <div>
              <h2 className="text-xl font-extrabold text-[#0a1f3d] mb-2">Related Subjects</h2>
              <p className="text-sm text-gray-600 mb-5">Explore neighbouring subjects families often book alongside this page.</p>
              <ul className="space-y-3">
                {subjects.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} className="group flex items-start gap-2 text-[#0f4a9b] font-semibold hover:underline">
                      <span>
                        {s.label}
                        {s.note && <span className="block text-xs font-medium text-gray-500 no-underline">{s.note}</span>}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {curricula.length > 0 && (
            <div>
              <h2 className="text-xl font-extrabold text-[#0a1f3d] mb-2">Related Curricula</h2>
              <p className="text-sm text-gray-600 mb-5">Match tutoring to the board and pathway your school follows.</p>
              <ul className="space-y-3">
                {curricula.map((c) => (
                  <li key={c.href}>
                    <a href={c.href} className="group flex items-start gap-2 text-[#0f4a9b] font-semibold hover:underline">
                      <span>
                        {c.label}
                        {c.note && <span className="block text-xs font-medium text-gray-500">{c.note}</span>}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
