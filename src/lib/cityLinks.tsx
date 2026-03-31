const citySlugMap: Record<string, string> = {
  "Toronto": "toronto", "North York": "north-york", "Scarborough": "scarborough",
  "Etobicoke": "etobicoke", "East York": "east-york", "Mississauga": "mississauga",
  "Brampton": "brampton", "Caledon": "caledon", "Oakville": "oakville",
  "Burlington": "burlington", "Milton": "milton", "Halton Hills": "halton-hills",
  "Georgetown": "georgetown", "Vaughan": "vaughan", "Markham": "markham",
  "Richmond Hill": "richmond-hill", "Thornhill": "thornhill", "Aurora": "aurora",
  "Newmarket": "newmarket", "East Gwillimbury": "east-gwillimbury", "Georgina": "georgina",
  "King": "king", "Stouffville": "stouffville", "Pickering": "pickering",
  "Ajax": "ajax", "Whitby": "whitby", "Oshawa": "oshawa", "Clarington": "clarington",
  "Uxbridge": "uxbridge", "Scugog": "scugog", "Brock": "brock",
};

export { citySlugMap };

export const getCityHref = (city: string): string | null => {
  const slug = citySlugMap[city];
  return slug ? `/service-area/${slug}` : null;
};

export const linkifyCities = (text: string): (string | JSX.Element)[] | string => {
  const cities = Object.keys(citySlugMap).sort((a, b) => b.length - a.length);
  const regex = new RegExp(`\\b(${cities.map(c => c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`, 'g');
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const city = match[1];
    parts.push(
      <a key={match.index} href={`/service-area/${citySlugMap[city]}`} className="text-primary hover:underline font-medium">
        {city}
      </a>
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length > 0 ? parts : text;
};
