import { Operators } from '@/constants/operators';

export type FilterValue = string | number | boolean | Date;

export type FilterConditionType = [string, Operators, FilterValue];

export type FilterItemProps = {
  category: string;
  checked: boolean;
  handleChangeFilter: (
    e: React.ChangeEvent<HTMLInputElement>,
    category: string
  ) => void;
};

export interface ContextStateType {
  filters: FilterConditionType[];
  setFilters(value: FilterConditionType[]): void;
}
