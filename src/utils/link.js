export function toInternalHref(href = '/') {
  if (!href) return '#/';
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
    return href;
  }
  return `#${href.startsWith('/') ? href : `/${href}`}`;
}

export function getHashPath() {
  if (typeof window === 'undefined') return '/';
  const hash = window.location.hash.replace(/^#/, '');
  return hash || '/';
}
