'use client';

import { useFilters } from '@/hooks/use-filters';

import { Operators } from '@/constants/operators';

import products from '@/db/products.json';
import FilterItem from './FilterItem';

const categories = Array.from(new Set(products.map(p => p.category)));

const Filters = () => {
  const { filters, setFilters } = useFilters();

  const handleChangeFilter = (
    e: React.ChangeEvent<HTMLInputElement>,
    category: string
  ) => {
    if (e.target.checked) {
      setFilters([...filters, ['category', Operators.equal, category]]);
    } else {
      const newValue = filters.filter(condition => condition[2] !== category);
      setFilters(newValue);
    }
  };

  return (
    <>
      <div className='z-10 h-fit bg-white rounded-lg shadow w-60 dark:bg-gray-700'>
        <div className='p-3'>
          <label htmlFor='input-group-search' className='sr-only'>
            Search
          </label>
          <div className='relative'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <svg
                className='w-4 h-4 text-gray-500 dark:text-gray-400'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </div>

            <input
              type='text'
              id='input-group-search'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Search category'
            />
          </div>
        </div>
        <ul className='px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200'>
          {categories.map((category, i) => {
            const checked = filters.some(condition => {
              const [field, operator, value] = condition;

              return value === category && field === 'category';
            });

            return (
              <FilterItem
                key={i}
                category={category}
                checked={checked}
                handleChangeFilter={handleChangeFilter}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Filters;
