import Link from 'next/link';
import { countries } from '@/data/countries';
import { notFound } from 'next/navigation';

export default function CityPage({ params }) {
  const country = countries[params.country];

  if (!country) {
    notFound();
  }

  const city = country.cities[params.city];

  if (!city) {
    notFound();
  }

  return (
    <div>
      <h1>{city.name}</h1>

      <p>
        <b>Площадь:</b> {city.area}
      </p>

      <p>
        <b>Население:</b> {city.population}
      </p>

      <p>
        <b>Год основания:</b> {city.founded}
      </p>

      <Link href={`/countries/${params.country}`}>
        ← Вернуться к стране {country.name}
      </Link>
    </div>
  );
}
