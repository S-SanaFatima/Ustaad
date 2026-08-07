import { ArrowRight } from 'lucide-react';

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
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
            <ol className="flex flex-wrap items-center gap-1.5">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-1.5">
                  {i > 0 && <span aria-hidden="true" className="text-gray-300">→</span>}
                  {i === breadcrumbs.length - 1 ? (
                    <span className="font-semibold text-[#0a1f3d]">{crumb.name}</span>
                  ) : (
                    <a href={crumb.href} className="hover:text-[#0f4a9b] underline-offset-2 hover:underline">{crumb.name}</a>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="grid md:grid-cols-2 gap-10">
          {subjects.length > 0 && (
            <div>
              <h2 className="text-xl font-extrabold text-[#0a1f3d] mb-2">Related Subjects</h2>
              <p className="text-sm text-gray-600 mb-5">Explore neighbouring subjects families often book alongside this page.</p>
              <ul className="space-y-3">
                {subjects.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} className="group flex items-start gap-2 text-[#0f4a9b] font-semibold hover:underline">
                      <ArrowRight className="h-4 w-4 mt-0.5 shrink-0 opacity-60 group-hover:opacity-100" />
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
                      <ArrowRight className="h-4 w-4 mt-0.5 shrink-0 opacity-60 group-hover:opacity-100" />
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
