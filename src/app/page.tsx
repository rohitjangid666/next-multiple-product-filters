import Filters from '@/components/filters';
import Products from '@/components/Products';

export default function Home() {
  return (
    <main className='min-h-screen p-24 flex gap-4'>
      <Filters />
      <Products />
    </main>
  );
}
