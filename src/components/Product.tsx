import { ProductType } from '@/types/product';

const Product: React.FC<ProductType> = ({
  productName,
  price,
  category,
  description,
}) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-700'>
      <div className='p-6'>
        <h2 className='font-bold text-xl mb-2'>{productName}</h2>
        <p className='text-gray-700 dark:text-gray-300 text-base mb-4'>
          Category: <span className='font-semibold'>{category}</span>
        </p>
        <p className='text-gray-900 dark:text-white text-lg font-semibold mb-4'>
          ${price}
        </p>
        <p className='text-gray-600 dark:text-gray-200 text-base mb-6'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Product;
