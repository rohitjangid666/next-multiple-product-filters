import { useContext } from 'react';

import { FilterContext } from '@/contexts/filter.context';

export const useFilters = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error('Please use filter provider in the parent element');
  }

  return context;
};
