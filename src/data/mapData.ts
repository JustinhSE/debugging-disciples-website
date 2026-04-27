export type CountryIdEntry = {
  name: string;
  id: number;
};

// Match by stable numeric IDs from world-atlas instead of name strings.
// Names can vary by punctuation/spelling across datasets; IDs stay consistent.
export const CANADA: CountryIdEntry = { name: 'Canada', id: 124 };
export const USA: CountryIdEntry = { name: 'United States', id: 840 };

// Readable country metadata for maintainers.
export const AFRICAN_COUNTRIES: CountryIdEntry[] = [
  { name: 'Algeria', id: 12 },
  { name: 'Angola', id: 24 },
  { name: 'Botswana', id: 72 },
  { name: 'Burundi', id: 108 },
  { name: 'Cameroon', id: 120 },
  { name: 'Cabo Verde', id: 132 },
  { name: 'Central African Republic', id: 140 },
  { name: 'Chad', id: 148 },
  { name: 'Comoros', id: 174 },
  { name: 'Republic of the Congo', id: 178 },
  { name: 'Democratic Republic of the Congo', id: 180 },
  { name: 'Benin', id: 204 },
  { name: 'Equatorial Guinea', id: 226 },
  { name: 'Ethiopia', id: 231 },
  { name: 'Eritrea', id: 232 },
  { name: 'Djibouti', id: 262 },
  { name: 'Gabon', id: 266 },
  { name: 'Gambia', id: 270 },
  { name: 'Ghana', id: 288 },
  { name: 'Guinea', id: 324 },
  { name: 'Cote d\'Ivoire', id: 384 },
  { name: 'Kenya', id: 404 },
  { name: 'Lesotho', id: 426 },
  { name: 'Liberia', id: 430 },
  { name: 'Libya', id: 434 },
  { name: 'Madagascar', id: 450 },
  { name: 'Malawi', id: 454 },
  { name: 'Mali', id: 466 },
  { name: 'Mauritania', id: 478 },
  { name: 'Mauritius', id: 480 },
  { name: 'Morocco', id: 504 },
  { name: 'Mozambique', id: 508 },
  { name: 'Namibia', id: 516 },
  { name: 'Niger', id: 562 },
  { name: 'Nigeria', id: 566 },
  { name: 'Guinea-Bissau', id: 624 },
  { name: 'Rwanda', id: 646 },
  { name: 'Sao Tome and Principe', id: 678 },
  { name: 'Senegal', id: 686 },
  { name: 'Seychelles', id: 690 },
  { name: 'Sierra Leone', id: 694 },
  { name: 'Somalia', id: 706 },
  { name: 'South Africa', id: 710 },
  { name: 'Zimbabwe', id: 716 },
  { name: 'South Sudan', id: 728 },
  { name: 'Sudan', id: 729 },
  { name: 'Western Sahara', id: 732 },
  { name: 'Eswatini', id: 748 },
  { name: 'Togo', id: 768 },
  { name: 'Tunisia', id: 788 },
  { name: 'Uganda', id: 800 },
  { name: 'Egypt', id: 818 },
  { name: 'Tanzania', id: 834 },
  { name: 'Burkina Faso', id: 854 },
  { name: 'Zambia', id: 894 },
];

// Fast lookup during render loops.
export const AFRICA_COUNTRY_IDS = new Set(AFRICAN_COUNTRIES.map((country) => country.id));
