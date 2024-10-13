import { createContext } from 'react';

import type { ContextStateType } from '../types/filter';

export const FilterContext = createContext<ContextStateType | null>(null);
