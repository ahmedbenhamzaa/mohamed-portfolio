# Publications & Academic Output Module

This package adds a unified `Publications & Academic Output` section/page for the Mohamed Falfoul portfolio.

## Included files

```text
src/routes/PublicationsPage.jsx
src/components/publications/AcademicOutputSection.jsx
src/components/publications/PublicationFilters.jsx
src/components/publications/PublicationList.jsx
src/components/publications/PublicationListItem.jsx
src/components/publications/PublicationsSummary.jsx
src/data/publications.json
src/styles/publications.css
config/tailwind.config.additions.js
```

## Features

- JSON-driven academic output list.
- Filter tabs: All / Papers / Posters / Abstracts / Congresses.
- Language filter: All / English / French.
- Most-recent-first sorting by default.
- Clean scholarly list layout, not cards or grid.
- Optional DOI and link support.
- Framer Motion scroll reveal on section entries and list items.
- Mobile-first responsive layout with a 375px minimum target.

## Dependencies

Make sure these are installed:

```bash
npm install framer-motion
```

## Usage

Import and register the route in your app/router:

```jsx
import PublicationsPage from './routes/PublicationsPage';
```

Then add it to your route config:

```jsx
<Route path="/publications" element={<PublicationsPage />} />
```

## Data editing

All academic entries are stored in:

```text
src/data/publications.json
```

To add DOI or link later, update the corresponding entry:

```json
{
  "doi": "10.xxxx/example",
  "link": "https://example.com"
}
```

If papers are added later, set:

```json
"type": "Paper"
```

The Papers filter is included even though the current CV data contains posters, accepted abstracts, and congress entries only.
