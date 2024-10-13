'use client';

import { useState, type PropsWithChildren } from 'react';

import { FilterContext } from './filter.context';

import type { FilterConditionType } from '@/types/filter';

export const FilterProvider = (props: PropsWithChildren) => {
  const [filters, setFilters] = useState<FilterConditionType[]>([]);
  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {props.children}
    </FilterContext.Provider>
  );
};
