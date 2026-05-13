import { Check, X } from 'lucide-react';

interface ProConProps {
  pros: string[];
  cons: string[];
  prosTitle?: string;
  consTitle?: string;
}

export function ProCon({
  pros = [],
  cons = [],
  prosTitle = 'What works',
  consTitle = 'What to watch for',
}: ProConProps) {
  return (
    <div className="my-6 grid sm:grid-cols-2 gap-4 not-prose">
      {/* Pros */}
      <div className="bg-[#4ADE80]/5 border border-[#4ADE80]/20 rounded-[14px] p-5">
        <p className="text-sm font-semibold text-[#4ADE80] mb-3 flex items-center gap-2">
          <Check size={14} />
          {prosTitle}
        </p>
        <ul className="space-y-2">
          {pros.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-secondary">
              <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-[#4ADE80]/15 flex items-center justify-center">
                <Check size={10} className="text-[#4ADE80]" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Cons */}
      <div className="bg-[#F87171]/5 border border-[#F87171]/20 rounded-[14px] p-5">
        <p className="text-sm font-semibold text-[#F87171] mb-3 flex items-center gap-2">
          <X size={14} />
          {consTitle}
        </p>
        <ul className="space-y-2">
          {cons.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-secondary">
              <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-[#F87171]/15 flex items-center justify-center">
                <X size={10} className="text-[#F87171]" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
