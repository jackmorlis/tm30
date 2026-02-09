"use client";

const footerLinks = {
  Product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  Resources: [
    { label: "TM30 vs TM47", href: "#" },
    { label: "Self-Registration Guide", href: "#" },
    { label: "2024 TM30 Guide", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-border">
      <div className="max-w-[1100px] mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-1.5 mb-4">
              <span className="text-[20px] font-bold text-dark tracking-tight">
                TM30<span className="text-primary">.ai</span>
              </span>
            </a>
            <p className="text-[13px] text-gray-text leading-relaxed max-w-[280px] mb-4">
              Making TM30 submissions quick and easy for property owners, hotels,
              and Airbnb hosts across Thailand.
            </p>
            <p className="text-[11px] text-[#b0bec5] leading-relaxed max-w-[280px]">
              TM30.ai is not affiliated with the Royal Thai Police Immigration
              Bureau of Thailand. We are an independent service.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[13px] font-semibold text-dark mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-gray-text hover:text-dark transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#b0bec5]">
            &copy; {new Date().getFullYear()} TM30.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-[12px] text-gray-text hover:text-dark transition-colors">
              Privacy
            </a>
            <a href="#" className="text-[12px] text-gray-text hover:text-dark transition-colors">
              Terms
            </a>
            <a href="#" className="text-[12px] text-gray-text hover:text-dark transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
