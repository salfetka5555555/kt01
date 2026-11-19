import Link from 'next/link';
import { countries } from '@/data/countries';

export default function HomePage() {
  return (
    <div>
      <h1>Страны</h1>

      <ul>
        {Object.entries(countries).map(([countryCode, country]) => (
          <li key={countryCode}>
            <Link href={`/countries/${countryCode}`}>
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
