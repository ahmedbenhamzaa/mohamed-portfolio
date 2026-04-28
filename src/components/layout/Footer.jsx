import navigationData from '../../data/navigation.json';
import { toInternalHref } from '../../utils/link';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

function LinkedInIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.67H9.34V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.61 0 4.27 2.38 4.27 5.47v6.27ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.53V9H7.1v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

function MailIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.75 6.75h14.5v10.5H4.75V6.75Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m5.25 7.25 6.75 5 6.75-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Footer({
  brand = navigationData.brand,
  links = navigationData.links,
  social = navigationData.social,
  className = '',
}) {
  const currentYear = new Date().getFullYear();
  const emailHref = social.email ? `mailto:${social.email}` : undefined;

  return (
    <footer className={cn('bg-[#0A1628] text-white', className)}>
      <div className="mx-auto w-[min(100%-32px,1180px)] py-14 md:py-18">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.1fr_1.4fr_0.7fr] lg:items-start">
          <div>
            <a href="#/" className="font-display text-[34px] font-semibold leading-none tracking-[-0.02em] text-white transition hover:text-[#C8D0DD]">
              {brand.name}
            </a>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#8B9BB4]">{brand.tagline}</p>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-4 lg:justify-self-center">
            {links.map((link) => (
              <a
                key={link.href}
                href={toInternalHref(link.href)}
                className="text-sm font-semibold text-[#C8D0DD] transition hover:text-white hover:underline hover:decoration-[#2563EB] hover:decoration-2 hover:underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 lg:justify-end">
            {social.linkedin ? (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#C8D0DD] transition hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#0A1628]"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            ) : null}

            {emailHref ? (
              <a
                href={emailHref}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#C8D0DD] transition hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#0A1628]"
                aria-label={`Email ${brand.name}`}
              >
                <MailIcon className="h-5 w-5" />
              </a>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs font-medium text-[#8B9BB4] sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {brand.name}. All rights reserved.</p>
          <p>Hosted on GitHub Pages</p>
        </div>
      </div>
    </footer>
  );
}
