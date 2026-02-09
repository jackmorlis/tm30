"use client";

import { motion } from "framer-motion";
import { Camera, Cpu, Send, CheckCircle, User, Download } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Mockup sub-components (pure HTML/CSS illustrations)               */
/* ------------------------------------------------------------------ */

function PassportMockup() {
  return (
    <div className="relative w-full max-w-[300px]">
      {/* Camera viewfinder frame */}
      <div className="relative rounded-xl border-2 border-dashed border-primary/40 p-4">
        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary rounded-tl-md" />
        <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-primary rounded-tr-md" />
        <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-primary rounded-bl-md" />
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary rounded-br-md" />

        {/* Passport card */}
        <div className="rounded-lg bg-[#f5f0e8] border border-[#d4c9b8] p-4 shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-[8px] font-bold tracking-[0.12em] text-[#8b7355] uppercase">
                Kingdom of the Netherlands
              </div>
              <div className="text-[10px] font-bold tracking-[0.1em] text-[#5a4632] uppercase">
                Passport
              </div>
            </div>
            <div className="flex gap-0.5">
              <div className="w-3 h-2 rounded-sm bg-red-500" />
              <div className="w-3 h-2 rounded-sm bg-white border border-gray-border" />
              <div className="w-3 h-2 rounded-sm bg-blue-600" />
            </div>
          </div>

          <div className="flex gap-3">
            {/* Photo */}
            <div className="w-16 h-[72px] rounded bg-[#e8ddd0] border border-[#d4c9b8] flex items-center justify-center flex-shrink-0 overflow-hidden">
              <User size={28} className="text-[#b8a690]" />
            </div>
            {/* Data fields */}
            <div className="flex-1 space-y-1.5 pt-0.5">
              <div>
                <div className="text-[8px] text-[#8b7355] uppercase tracking-wide">Surname</div>
                <div className="text-[11px] font-semibold text-[#2c1f10]">DE BRUIJN</div>
              </div>
              <div>
                <div className="text-[8px] text-[#8b7355] uppercase tracking-wide">Given Names</div>
                <div className="text-[11px] font-semibold text-[#2c1f10]">WILLEKE LISELOTTE</div>
              </div>
              <div className="flex gap-3">
                <div>
                  <div className="text-[8px] text-[#8b7355] uppercase tracking-wide">Nationality</div>
                  <div className="text-[10px] font-medium text-[#2c1f10]">Netherlands</div>
                </div>
                <div>
                  <div className="text-[8px] text-[#8b7355] uppercase tracking-wide">Sex</div>
                  <div className="text-[10px] font-medium text-[#2c1f10]">F</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div>
                  <div className="text-[8px] text-[#8b7355] uppercase tracking-wide">Date of Birth</div>
                  <div className="text-[10px] font-medium text-[#2c1f10]">10 MAR 1965</div>
                </div>
                <div>
                  <div className="text-[8px] text-[#8b7355] uppercase tracking-wide">Passport No.</div>
                  <div className="text-[10px] font-medium text-[#2c1f10]">SPECI2014</div>
                </div>
              </div>
            </div>
          </div>

          {/* MRZ zone */}
          <div className="mt-2.5 pt-2 border-t border-[#d4c9b8]">
            <div className="font-mono text-[8px] text-[#5a4632] tracking-[0.05em] leading-[1.4]">
              P&lt;NLDDE&lt;BRUIJN&lt;&lt;WILLEKE&lt;LISELOTTE&lt;&lt;&lt;&lt;&lt;&lt;
              <br />
              SPECI20142NLD6503101F2403096&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;82
            </div>
          </div>
        </div>
      </div>

      {/* Scan badge */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-white text-[11px] font-medium shadow-md">
        <Camera size={12} />
        Tap to scan
      </div>
    </div>
  );
}

function JsonDataMockup() {
  const lines = [
    { key: '"first_name"', value: '"Willeke Liselotte"' },
    { key: '"last_name"', value: '"De Bruijn"' },
    { key: '"born"', value: '"1965-03-10"' },
    { key: '"country"', value: '"Netherlands"' },
    { key: '"passport_number"', value: '"SPECI2014"' },
    { key: '"passport_expires"', value: '"2024-03-09"' },
  ];

  return (
    <div className="w-full max-w-[300px]">
      <div className="rounded-lg bg-[#1E293B] overflow-hidden shadow-lg">
        {/* Editor chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0F172A]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          <span className="text-[10px] text-slate-500 ml-2">extracted_data.json</span>
        </div>

        {/* Code content */}
        <div className="px-4 py-3 font-mono text-[11px] leading-[1.7]">
          <div className="text-slate-400">{"{"}</div>
          {lines.map((line, i) => (
            <div key={i} className="pl-4">
              <span className="text-purple-400">{line.key}</span>
              <span className="text-slate-400">: </span>
              <span className="text-green-400">{line.value}</span>
              {i < lines.length - 1 && <span className="text-slate-400">,</span>}
            </div>
          ))}
          <div className="text-slate-400">{"}"}</div>
        </div>

        {/* Success badge */}
        <div className="px-4 pb-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-green-500/10 text-green-400 text-[10px] font-medium">
            <CheckCircle size={11} />
            Extracted successfully
          </div>
        </div>
      </div>
    </div>
  );
}

function FormMockup() {
  const fields = [
    { label: "Full Name", value: "Willeke Liselotte De Bruijn" },
    { label: "Passport Number", value: "SPECI2014" },
    { label: "Nationality", value: "NLD — Dutch" },
    { label: "Date of Birth", value: "10/03/1965" },
  ];

  return (
    <div className="w-full max-w-[280px]">
      <div className="rounded-lg bg-white border border-gray-border overflow-hidden shadow-sm">
        {/* Thai tricolor bar */}
        <div className="flex h-1">
          <div className="flex-1 bg-red-500" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-blue-600" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-red-500" />
        </div>

        {/* Form header */}
        <div className="px-4 py-2.5 border-b border-gray-border bg-gray-bg">
          <div className="text-[11px] font-semibold text-dark">TM30 Notification Form</div>
          <div className="text-[9px] text-gray-text">Thailand Immigration Bureau</div>
        </div>

        {/* Form fields */}
        <div className="p-3 space-y-2.5">
          {fields.map((field, i) => (
            <div key={i}>
              <div className="text-[9px] text-gray-text mb-0.5">{field.label}</div>
              <div className="flex items-center justify-between px-2.5 py-1.5 rounded border border-primary/30 bg-primary/[0.03]">
                <span className="text-[11px] text-primary font-medium">{field.value}</span>
                <CheckCircle size={11} className="text-success flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Auto-filling indicator */}
        <div className="px-4 pb-3">
          <div className="flex items-center gap-2 text-[10px] text-amber-600">
            <div className="w-3 h-3 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
            Auto-submitting to Immigration...
          </div>
        </div>
      </div>
    </div>
  );
}

function ConfirmationMockup() {
  return (
    <div className="w-full max-w-[260px]">
      <div className="rounded-lg bg-white border border-gray-border p-5 shadow-sm text-center">
        {/* Check icon */}
        <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-3">
          <CheckCircle size={24} className="text-success" />
        </div>

        <h4 className="text-[14px] font-semibold text-dark mb-1">Submission Confirmed</h4>
        <p className="text-[11px] text-gray-text mb-4">Your TM30 has been filed successfully.</p>

        {/* Receipt details */}
        <div className="text-left space-y-2 mb-4">
          {[
            { label: "Reference", value: "TM30-2026-48291" },
            { label: "Submitted", value: "Feb 9, 2026" },
            { label: "Guest", value: "Willeke L. De Bruijn" },
          ].map((row, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-[10px] text-gray-text">{row.label}</span>
              <span className="text-[11px] font-medium text-dark">{row.value}</span>
            </div>
          ))}
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-gray-text">Status</span>
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-green-50 text-success">
              Confirmed
            </span>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-dashed border-gray-border mb-3" />

        {/* Download link */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-primary font-medium">
          <Download size={12} />
          Download Receipt
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step mockup dispatcher                                            */
/* ------------------------------------------------------------------ */

function StepMockup({ type }: { type: string }) {
  switch (type) {
    case "passport":
      return <PassportMockup />;
    case "json":
      return <JsonDataMockup />;
    case "form":
      return <FormMockup />;
    case "confirmation":
      return <ConfirmationMockup />;
    default:
      return null;
  }
}

/* ------------------------------------------------------------------ */
/*  Step data                                                          */
/* ------------------------------------------------------------------ */

const steps = [
  {
    number: 1,
    icon: Camera,
    title: "Snap a passport photo",
    description:
      "Take a photo of your guest's passport with your phone. Even blurry or low-light photos work — our AI handles the rest.",
    color: "#216DE3",
    mockup: "passport",
  },
  {
    number: 2,
    icon: Cpu,
    title: "AI extracts the data",
    description:
      "Our system reads name, nationality, passport number, and all required fields automatically. Zero manual entry.",
    color: "#8B5CF6",
    mockup: "json",
  },
  {
    number: 3,
    icon: Send,
    title: "Auto-submit to Immigration",
    description:
      "The TM30 form is auto-filled and submitted directly to Thailand's Immigration Bureau. If their system is down, we retry every 5 minutes.",
    color: "#F59E0B",
    mockup: "form",
  },
  {
    number: 4,
    icon: CheckCircle,
    title: "All done — confirmation sent",
    description:
      "Receive instant confirmation and download your official receipt anytime from your dashboard.",
    color: "#22C55E",
    mockup: "confirmation",
  },
];

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function HeroSteps() {
  return (
    <motion.div
      id="how-it-works"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="max-w-[1100px] mx-auto px-6 pb-20"
    >
      {/* Section label */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light text-primary text-[13px] font-medium">
          How it works
        </div>
      </div>

      {/* Step cards */}
      <div className="space-y-5">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          >
            <div className="rounded-xl border border-gray-border bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden hover:border-primary/20 hover:shadow-[0_4px_20px_rgba(33,109,227,0.08)] transition-all">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left: text */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-[14px] flex-shrink-0"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </div>
                    <step.icon size={18} style={{ color: step.color }} />
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-gray-text leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Right: visual mockup */}
                <div className="p-6 md:p-8 bg-gray-bg flex items-center justify-center min-h-[200px] border-t md:border-t-0 md:border-l border-gray-border">
                  <StepMockup type={step.mockup} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
