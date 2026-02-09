"use client";

import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", role: "Airbnb Host, Chiang Mai", text: "This saved me hours every week. I have 3 properties and used to dread the TM30 process. Now it's literally a photo and done.", rating: 5 },
  { name: "James T.", role: "Hotel Owner, Phuket", text: "The Telegram integration is genius. My reception staff just sends a passport photo through the chat and the system handles everything.", rating: 5 },
  { name: "Napat K.", role: "Property Manager, Bangkok", text: "We manage 50+ units. The Business plan pays for itself many times over compared to the time we used to spend on manual submissions.", rating: 5 },
  { name: "Michael R.", role: "Condo Owner, Pattaya", text: "I was always worried about forgetting TM30 and getting fined. Now it's automated and I have peace of mind.", rating: 5 },
  { name: "Lisa W.", role: "Guesthouse Owner, Koh Samui", text: "Incredibly easy to use. Even my staff who aren't tech-savvy can handle it. The AI reads even blurry passport photos perfectly.", rating: 5 },
  { name: "David K.", role: "Expat, Bangkok", text: "As a property owner, I needed something reliable. TM30.ai hasn't let me down once in 6 months of daily use.", rating: 5 },
];

// Double the array for seamless loop
const doubled = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 mb-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light text-primary text-[13px] font-medium mb-4">
            Reviews
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold text-dark mb-3">
            Trusted by thousands
          </h2>
          <p className="text-gray-text text-[16px]">
            See why property owners across Thailand choose TM30.ai.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-marquee">
          {doubled.map((t, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[360px] mx-2"
            >
              <div className="rounded-xl border border-gray-border bg-white p-6 h-full">
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                {/* Text */}
                <p className="text-[14px] text-dark leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-[12px] font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[13px] font-medium text-dark">{t.name}</div>
                    <div className="text-[12px] text-gray-text">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
