import type { FilterItemProps } from '@/types/filter';

const FilterItem: React.FC<FilterItemProps> = ({
  category,
  handleChangeFilter,
  checked,
}) => {
  return (
    <li>
      <div className='flex pl-2 items-center rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
        <input
          id={`category-${category}`}
          type='checkbox'
          checked={checked}
          onChange={e => handleChangeFilter(e, category)}
          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
        />
        <label
          htmlFor={`category-${category}`}
          className='w-full p-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300'
        >
          {category}
        </label>
      </div>
    </li>
  );
};

export default FilterItem;
