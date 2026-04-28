import { useEffect, useMemo, useState } from 'react';
import navigationData from '../../data/navigation.json';
import { getHashPath, toInternalHref } from '../../utils/link';

const themeStorageKey = 'mohamed-portfolio-theme';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';

  const storedTheme = window.localStorage.getItem(themeStorageKey);
  if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme;

  return 'dark';
}

function applyTheme(theme) {
  if (typeof document === 'undefined') return;

  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.classList.toggle('light', theme === 'light');
}

function MenuIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function SunIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4V2.5M12 21.5V20M4 12H2.5M21.5 12H20M6.34 6.34 5.28 5.28M18.72 18.72l-1.06-1.06M17.66 6.34l1.06-1.06M5.28 18.72l1.06-1.06" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function MoonIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 15.35A8.18 8.18 0 0 1 8.65 4a8.52 8.52 0 1 0 11.35 11.35Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function normalizePath(path) {
  if (!path) return '/';
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
  return path;
}

function isActivePath(linkHref, currentPath) {
  const normalizedHref = normalizePath(linkHref);
  const normalizedCurrent = normalizePath(currentPath);

  if (normalizedHref === '/') return normalizedCurrent === '/';
  return normalizedCurrent === normalizedHref || normalizedCurrent.startsWith(`${normalizedHref}/`);
}

export default function Navbar({
  brand = navigationData.brand,
  links = navigationData.links,
  className = '',
  ctaLabel,
  ctaHref = '/contact',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(themeStorageKey, theme);
  }, [theme]);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 8);
    const updatePath = () => setCurrentPath(getHashPath());

    updateScrollState();
    updatePath();

    window.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('popstate', updatePath);
    window.addEventListener('hashchange', updatePath);

    return () => {
      window.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('popstate', updatePath);
      window.removeEventListener('hashchange', updatePath);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const activeLabel = useMemo(() => {
    return links.find((link) => isActivePath(link.href, currentPath))?.label || '';
  }, [links, currentPath]);

  const toggleTheme = () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
        isScrolled
          ? 'border-white/10 bg-[#0A1628]/82 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl'
          : 'border-transparent bg-[#0A1628]/70 backdrop-blur-sm',
        className,
      )}
    >
      <nav className="mx-auto flex h-20 w-[min(100%-32px,1180px)] items-center justify-between gap-6" aria-label="Primary navigation">
        <a href="#/" className="group inline-flex flex-col leading-none" aria-label={`${brand.name} — home`}>
          <span className="font-display text-[26px] font-semibold tracking-[-0.02em] text-white transition-colors group-hover:text-[#C8D0DD]">
            {brand.name}
          </span>
          {activeLabel ? (
            <span className="mt-1 hidden text-[10px] font-bold uppercase tracking-[0.24em] text-[#8B9BB4] sm:block">
              {activeLabel}
            </span>
          ) : null}
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const active = isActivePath(link.href, currentPath);
            return (
              <a
                key={link.href}
                href={toInternalHref(link.href)}
                className={cn(
                  'group relative py-2 text-[13px] font-bold uppercase tracking-[0.14em] transition-colors',
                  active ? 'text-white' : 'text-[#C8D0DD] hover:text-white',
                )}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-[2px] rounded-full bg-[#2563EB] transition-all duration-300',
                    active ? 'w-full' : 'w-0 group-hover:w-full',
                  )}
                />
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          {ctaLabel ? (
            <a
              href={toInternalHref(ctaHref)}
              className="hidden rounded-full border border-white/15 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.16em] text-white transition hover:border-[#2563EB] hover:bg-[#2563EB] xl:inline-flex"
            >
              {ctaLabel}
            </a>
          ) : null}

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition hover:border-[#2563EB] hover:text-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#0A1628]"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition hover:border-[#2563EB] hover:text-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#0A1628] lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-0 top-20 z-40 bg-[#0A1628]/98 px-6 py-8 backdrop-blur-xl transition-all duration-300 lg:hidden',
          isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-4 opacity-0',
        )}
      >
        <div className="mx-auto flex h-full w-full max-w-xl flex-col">
          <div className="mb-8 border-b border-white/10 pb-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#8B9BB4]">Navigation</p>
            <p className="mt-2 font-display text-3xl font-semibold text-white">{brand.name}</p>
          </div>

          <div className="flex flex-1 flex-col gap-1">
            {links.map((link, index) => {
              const active = isActivePath(link.href, currentPath);
              return (
                <a
                  key={link.href}
                  href={toInternalHref(link.href)}
                  onClick={closeMenu}
                  className={cn(
                    'reveal-fade-up flex items-center justify-between border-b border-white/10 py-5 text-left transition-colors',
                    active ? 'text-white' : 'text-[#C8D0DD] hover:text-white',
                  )}
                  style={{ animationDelay: `${index * 45}ms` }}
                  aria-current={active ? 'page' : undefined}
                >
                  <span className="font-display text-[32px] font-semibold leading-none">{link.label}</span>
                  <span className={cn('h-2 w-2 rounded-full', active ? 'bg-[#2563EB]' : 'bg-white/20')} />
                </a>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6 text-sm text-[#8B9BB4]">
            <span>{brand.tagline}</span>
            <button type="button" onClick={toggleTheme} className="font-bold text-white underline decoration-[#2563EB] decoration-2 underline-offset-4">
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
