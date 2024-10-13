'use client';

import { useEffect, useState } from 'react';

import { useFilters } from '@/hooks/use-filters';
import Product from './Product';

import type { ProductType } from '@/types/product';

const Products = () => {
  const [data, setData] = useState<ProductType[]>([]);
  const { filters } = useFilters();

  useEffect(() => {
    const url = new URL('http://localhost:3000/api/products');

    // 2. add a filter parameter if there are multiple filter conditions
    const filterStr = filters
      .map(condition => {
        const [field, operation, value] = condition;
        return `${field}-${operation}-${value}`;
      })
      .join(',');

    if (!!filters.length) {
      url.searchParams.append('filters', filterStr);
    }

    // here's an example url with filters applied:
    // http://localhost:3000/api/products?filters=category-eq-Computers%2Ccategory-eq-Toys%2Ccategory-eq-Tools

    // 3. use fetch to get the data
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((products: ProductType[]) => {
        setData(products);
      });
  }, [filters]);

  return (
    <div className='grid grid-cols-4 h-fit gap-4'>
      {data.map((product, i) => (
        <Product {...product} key={i} />
      ))}
    </div>
  );
};

export default Products;
