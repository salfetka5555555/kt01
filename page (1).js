import Link from 'next/link';
import { countries } from '@/data/countries';
import { notFound } from 'next/navigation';

export default function CountryPage({ params }) {
  const country = countries[params.country];

  if (!country) {
    notFound();
  }

  return (
    <div>
      <h1>{country.name}</h1>

      <p>
        <b>Язык:</b> {country.language}
      </p>

      <p>
        <b>Площадь:</b> {country.area}
      </p>

      <p>
        <b>Население:</b> {country.population}
      </p>

      <h2>Города</h2>

      <ul>
        {Object.entries(country.cities).map(([cityCode, city]) => (
          <li key={cityCode}>
            <Link href={`/countries/${params.country}/${cityCode}`}>
              {city.name}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/">← На главную</Link>
    </div>
  );
}
