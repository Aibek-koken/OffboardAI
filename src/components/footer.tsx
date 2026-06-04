const footerLinks = [
  { label: "Проблема", href: "#pain" },
  { label: "Сравнение", href: "#comparison" },
  { label: "Паспорт", href: "#passport" },
  { label: "Безопасность", href: "#security" },
  { label: "Цена", href: "#pricing" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-bg py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <a
            href="#hero"
            className="font-heading text-2xl font-bold tracking-tight text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            OffboardAI
          </a>
          <p className="mt-2 text-sm text-text-muted">
            Role Technical Passport для уходящих инженеров.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-4 text-sm text-text-muted">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="min-h-10 rounded-full px-3 py-2 transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="font-mono text-xs text-text-muted">
          © 2026 OffboardAI
        </p>
      </div>
    </footer>
  );
}
