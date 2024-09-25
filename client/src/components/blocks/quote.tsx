import { QuoteIcon } from "lucide-react";

interface SharedQuote {
  __component: "shared.quote";
  id: number;
  title: string;
  body: string;
}

export function Quote({ title, body }: Readonly<SharedQuote>) {
  return (
    <div className="max-w-4xl mx-auto my-24 relative">
      <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg z-10">
        <QuoteIcon className="w-8 h-8 text-white" />
      </div>
      <div className="bg-white shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-2xl overflow-hidden transform hover:scale-102 transition-all duration-300 ease-in-out">
        <div className="bg-gradient-to-r from-primary via-primary-dark to-primary p-10 pt-14">
          <h2 className="text-4xl font-black text-white tracking-tight leading-tight">{title}</h2>
        </div>
        <div className="p-10 bg-gradient-to-br from-gray-50 to-white">
          <blockquote className="text-2xl text-gray-800 leading-relaxed italic">
            <span className="font-serif text-6xl text-primary absolute -top-4 -left-4 opacity-25">"</span>
            {body}
            <span className="font-serif text-6xl text-primary absolute -bottom-8 -right-4 opacity-25">"</span>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
