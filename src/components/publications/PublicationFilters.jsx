export default function PublicationFilters({
  typeTabs,
  languages,
  activeType,
  activeLanguage,
  onTypeChange,
  onLanguageChange,
}) {
  return (
    <div className="flex flex-col gap-5 border-y border-deep-navy/10 py-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap gap-2" aria-label="Filter by academic output type">
        {typeTabs.map((tab) => {
          const isActive = activeType === tab.value;
          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => onTypeChange(tab.value)}
              className={`publication-filter-button ${isActive ? 'publication-filter-button-active' : ''}`}
              aria-pressed={isActive}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-2" aria-label="Filter by language">
        <span className="mr-1 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-mid-grey">
          Language
        </span>
        {languages.map((language) => {
          const isActive = activeLanguage === language.value;
          return (
            <button
              key={language.value}
              type="button"
              onClick={() => onLanguageChange(language.value)}
              className={`publication-language-button ${isActive ? 'publication-language-button-active' : ''}`}
              aria-pressed={isActive}
            >
              {language.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
