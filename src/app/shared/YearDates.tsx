import { CalendarDays } from 'lucide-react';

type Row = { date: string; text: string };

/* A compact dated timeline for a school year: date on the left, what it means on the right. */
export default function YearDates({ eyebrow, heading, intro, rows, id }: { eyebrow: string; heading: string; intro: string; rows: Row[]; id?: string }) {
  return (
    <section id={id} className="py-8 sm:py-10 bg-[#f4f7fc] border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5 sm:mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/12 text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.12em] mb-2.5">
            <CalendarDays className="h-3.5 w-3.5" /> {eyebrow}
          </span>
          <h2 className="text-[22px] sm:text-[28px] font-extrabold text-[#0a1f3d] leading-tight mb-2">{heading}</h2>
          <p className="text-[13px] sm:text-[14.5px] text-[#4a5a72] leading-relaxed max-w-2xl mx-auto">{intro}</p>
        </div>
        <ol className="relative rounded-2xl bg-white border border-slate-200/80 shadow-[0_1px_2px_rgba(10,31,61,0.04),0_16px_36px_-28px_rgba(10,31,61,0.5)] divide-y divide-slate-100 overflow-hidden">
          {rows.map((r) => (
            <li key={r.date} className="grid sm:grid-cols-[190px_1fr] gap-1 sm:gap-5 px-4 sm:px-6 py-3 sm:py-3.5">
              <span className="flex items-center gap-2 text-[13px] sm:text-[13.5px] font-extrabold text-[#0f4a9b] tabular-nums">
                <span className="w-2 h-2 rounded-full bg-[#C7A24A] shrink-0" aria-hidden="true" />
                {r.date}
              </span>
              <p className="text-[13px] sm:text-[14px] text-[#2c3e5c] leading-relaxed">{r.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
